package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strings"
	"time"
)

// ── helpers ──────────────────────────────────────────────────────────────────

func banner(title string) {
	fmt.Printf("\n╔══════════════════════════════════════╗\n")
	fmt.Printf("║  %-36s║\n", title)
	fmt.Printf("╚══════════════════════════════════════╝\n")
}

func ok(msg string)   { fmt.Printf("  ✓  %s\n", msg) }
func info(msg string) { fmt.Printf("  →  %s\n", msg) }
func fail(msg string) { fmt.Printf("  ✗  %s\n", msg) }

// ── Example 1: Write lines with buffered writer ───────────────────────────────

func example1_writeLines(path string, lines []string) error {
	f, err := os.OpenFile(path, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, 0644)
	if err != nil {
		return fmt.Errorf("create file: %w", err)
	}
	defer f.Close()

	w := bufio.NewWriter(f)
	for _, line := range lines {
		if _, err := fmt.Fprintln(w, line); err != nil {
			return fmt.Errorf("write line: %w", err)
		}
	}
	return w.Flush() // CRITICAL: don't forget this
}

// ── Example 2: Read lines with bufio.Scanner ──────────────────────────────────

func example2_readLines(path string) ([]string, error) {
	f, err := os.Open(path)
	if err != nil {
		return nil, fmt.Errorf("open file: %w", err)
	}
	defer f.Close()

	var lines []string
	scanner := bufio.NewScanner(f)
	for scanner.Scan() {
		lines = append(lines, scanner.Text())
	}
	return lines, scanner.Err() // Err() is separate from io.EOF
}

// ── Example 3: Chunked read for large/binary files ───────────────────────────

func example3_chunkedRead(path string) (int64, error) {
	f, err := os.Open(path)
	if err != nil {
		return 0, fmt.Errorf("open file: %w", err)
	}
	defer f.Close()

	var totalBytes int64
	buf := make([]byte, 32*1024) // 32 KB chunks
	for {
		n, err := f.Read(buf)
		if n > 0 {
			totalBytes += int64(n) // process buf[:n] — only valid bytes
		}
		if err == io.EOF {
			break
		}
		if err != nil {
			return totalBytes, fmt.Errorf("read chunk: %w", err)
		}
	}
	return totalBytes, nil
}

// ── Example 4: Append to a log file ──────────────────────────────────────────

func example4_appendLog(path, entry string) error {
	f, err := os.OpenFile(path, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		return fmt.Errorf("open log: %w", err)
	}
	defer f.Close()

	_, err = fmt.Fprintf(f, "[%s] %s\n", time.Now().Format(time.RFC3339), entry)
	return err
}

// ── Example 5: JSON config read/write ────────────────────────────────────────

type Config struct {
	AppName string   `json:"app_name"`
	Port    int      `json:"port"`
	Debug   bool     `json:"debug"`
	Tags    []string `json:"tags"`
}

func example5_writeJSON(path string, cfg Config) error {
	f, err := os.OpenFile(path, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, 0644)
	if err != nil {
		return fmt.Errorf("create config: %w", err)
	}
	defer f.Close()

	enc := json.NewEncoder(f)
	enc.SetIndent("", "  ") // pretty print
	return enc.Encode(cfg)
}

func example5_readJSON(path string) (Config, error) {
	f, err := os.Open(path)
	if err != nil {
		return Config{}, fmt.Errorf("open config: %w", err)
	}
	defer f.Close()

	var cfg Config
	dec := json.NewDecoder(f)
	dec.DisallowUnknownFields() // catches config key typos
	if err := dec.Decode(&cfg); err != nil {
		return Config{}, fmt.Errorf("parse config: %w", err)
	}
	return cfg, nil
}

// ── Example 6: Copy file ──────────────────────────────────────────────────────

func example6_copyFile(src, dst string) error {
	in, err := os.Open(src)
	if err != nil {
		return fmt.Errorf("open src: %w", err)
	}
	defer in.Close()

	out, err := os.Create(dst)
	if err != nil {
		return fmt.Errorf("create dst: %w", err)
	}
	defer out.Close()

	if _, err = io.Copy(out, in); err != nil {
		return fmt.Errorf("copy: %w", err)
	}
	return out.Sync() // flush OS buffers to disk
}

// ── Example 7: Atomic write (crash-safe save) ─────────────────────────────────

func example7_atomicWrite(path string, data []byte) error {
	dir := filepath.Dir(path)
	tmp, err := os.CreateTemp(dir, ".tmp-*")
	if err != nil {
		return fmt.Errorf("mktemp: %w", err)
	}
	tmpName := tmp.Name()
	defer func() {
		tmp.Close()
		os.Remove(tmpName) // cleans up only if rename failed
	}()

	if _, err = tmp.Write(data); err != nil {
		return fmt.Errorf("write tmp: %w", err)
	}
	if err = tmp.Sync(); err != nil { // flush to kernel
		return fmt.Errorf("sync: %w", err)
	}
	if err = tmp.Close(); err != nil {
		return fmt.Errorf("close tmp: %w", err)
	}
	return os.Rename(tmpName, path) // atomic swap on POSIX
}

// ── BAD examples (for contrast) ───────────────────────────────────────────────

func bad_noDefer(path string) {
	f, err := os.Open(path)
	if err != nil {
		return // file descriptor leaks if we just return here
	}
	// BAD: manual Close at the bottom — skipped on early returns or panics
	data := make([]byte, 100)
	f.Read(data) // BAD: ignoring the error
	f.Close()    // BAD: never reached if Read panics
}

func bad_readAll(path string) {
	data, _ := os.ReadFile(path) // BAD: loads ENTIRE file into memory
	_ = data                     // BAD: ignoring error with _
}

// ── Main ──────────────────────────────────────────────────────────────────────

func main() {
	const dir = "./demo_files"
	os.MkdirAll(dir, 0755)
	defer os.RemoveAll(dir) // cleanup after the demo

	// ── 1. Write lines ──
	banner("1. Write lines (buffered writer)")
	textFile := filepath.Join(dir, "poems.txt")
	lines := []string{
		"The quick brown fox jumps over the lazy dog",
		"Pack my box with five dozen liquor jugs",
		"How vexingly quick daft zebras jump",
		"The five boxing wizards jump quickly",
		"Sphinx of black quartz, judge my vow",
	}
	if err := example1_writeLines(textFile, lines); err != nil {
		fail(err.Error())
	} else {
		ok(fmt.Sprintf("Wrote %d lines → %s", len(lines), textFile))
	}

	// ── 2. Read lines ──
	banner("2. Read lines (bufio.Scanner)")
	read, err := example2_readLines(textFile)
	if err != nil {
		fail(err.Error())
	} else {
		ok(fmt.Sprintf("Read back %d lines", len(read)))
		for i, l := range read {
			info(fmt.Sprintf("line %d: %s", i+1, l))
		}
	}

	// ── 3. Chunked read ──
	banner("3. Chunked read (32 KB chunks)")
	bytes, err := example3_chunkedRead(textFile)
	if err != nil {
		fail(err.Error())
	} else {
		ok(fmt.Sprintf("Processed %d bytes in 32 KB chunks", bytes))
	}

	// ── 4. Append log ──
	banner("4. Append to log file")
	logFile := filepath.Join(dir, "app.log")
	events := []string{"server started", "user alice logged in", "query executed in 12ms"}
	for _, e := range events {
		if err := example4_appendLog(logFile, e); err != nil {
			fail(err.Error())
		} else {
			ok("Appended: " + e)
		}
	}
	info("Log contents:")
	logLines, _ := example2_readLines(logFile)
	for _, l := range logLines {
		info("  " + l)
	}

	// ── 5. JSON config ──
	banner("5. JSON config read/write")
	cfgFile := filepath.Join(dir, "config.json")
	original := Config{
		AppName: "my-service",
		Port:    8080,
		Debug:   true,
		Tags:    []string{"prod", "v2", "go"},
	}
	if err := example5_writeJSON(cfgFile, original); err != nil {
		fail(err.Error())
	} else {
		ok("Wrote config.json")
	}
	loaded, err := example5_readJSON(cfgFile)
	if err != nil {
		fail(err.Error())
	} else {
		ok(fmt.Sprintf("Loaded config: app=%s port=%d debug=%v tags=%v",
			loaded.AppName, loaded.Port, loaded.Debug, loaded.Tags))
	}
	// Show the raw JSON
	raw, _ := os.ReadFile(cfgFile) // ReadFile is fine for small configs
	info("Raw JSON:\n" + strings.TrimSpace(string(raw)))

	// ── 6. Copy file ──
	banner("6. Copy file (io.Copy)")
	copyDst := filepath.Join(dir, "poems_backup.txt")
	if err := example6_copyFile(textFile, copyDst); err != nil {
		fail(err.Error())
	} else {
		srcStat, _ := os.Stat(textFile)
		dstStat, _ := os.Stat(copyDst)
		ok(fmt.Sprintf("Copied %s → %s", textFile, copyDst))
		ok(fmt.Sprintf("src size: %d bytes | dst size: %d bytes (match: %v)",
			srcStat.Size(), dstStat.Size(), srcStat.Size() == dstStat.Size()))
	}

	// ── 7. Atomic write ──
	banner("7. Atomic write (crash-safe)")
	atomicFile := filepath.Join(dir, "state.json")
	payload := []byte(`{"version":1,"status":"ok","updated":"` + time.Now().Format(time.RFC3339) + `"}`)
	if err := example7_atomicWrite(atomicFile, payload); err != nil {
		fail(err.Error())
	} else {
		ok("Wrote atomically via temp file + rename")
		data, _ := os.ReadFile(atomicFile)
		info("Content: " + string(data))
	}

	// ── Summary ──
	banner("Done — all examples ran successfully")
	fmt.Println()
}
