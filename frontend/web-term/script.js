const $ = (sel) => document.querySelector(sel);

// 1. DOM REFERENCES
const input = $("#command-input");
const terminalOutput = $("#output");
const terminal = $("#terminal");

// ─── AUTOCOMPLETE HINT ELEMENT ───
const hint = document.createElement("div");
hint.id = "autocomplete-hint";
document.body.appendChild(hint);

// 2. TERMINAL STATE
const state = {
    history: [], // list of past commands
    historyIndex: -1, // -1 = at the live prompt
    liveInput: "", // saves what user typed before navigating history
};

// 3. FAKE FILE SYSTEM  (for `ls` command)
const fakeFS = {
    "/": ["projects/", "notes/", "readme.txt", ".bashrc", ".profile"],
    "projects/": ["web-term/", "api-server/", "todo-app/"],
    "notes/": ["backend.md", "ideas.txt"],
};

// 4. JOKES / QUOTES POOL
const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?'",
    "Why do Java developers wear glasses? Because they don't C#.",
    "How many programmers does it take to change a light bulb? None — it's a hardware problem.",
    "There are 10 types of people: those who understand binary, and those who don't.",
];

// 5. COMMAND REGISTRY
const commands = {
    help: () => {
        print("Available commands:", "info");
        print("  help      — show this list", "dim");
        print("  about     — about this terminal", "dim");
        print("  date      — current date & time", "dim");
        print("  clear     — clear the screen", "dim");
        print("  whoami    — who are you?", "dim");
        print("  echo      — echo [text]", "dim");
        print("  ls        — list files", "dim");
        print("  joke      — tell a joke", "dim");
        print("  quote     — inspirational quote", "dim");
        print("  markdown  — markdown [filename.md]  open live editor", "dim");
    },

    about: () => {
        print("Hi, I am Abrar — learning backend systems.", "success");
        print("Built this terminal to sharpen my JS skills.", "dim");
    },

    date: () => {
        print(new Date().toString(), "info");
    },

    clear: () => {
        terminalOutput.innerHTML = "";
    },

    whoami: () => {
        print("abrar — root of his own learning journey 🌱", "success");
    },

    //Split the raw input on the first space to get the command name, then take the rest as the argument to print back. The `args` param is passed from executeCommand().
    echo: (args) => {
        if (!args) {
            print("Usage: echo [text]", "error");
        } else {
            print(args, "cmd-echo");
        }
    },

    ls: () => {
        const files = fakeFS["/"];
        print(files.join("   "), "info");
    },

    joke: () => {
        const j = jokes[(Math.random() * jokes.length) | 0];
        print(j, "success");
    },

    quote: () => {
        const quotes = [
            '"The best way to predict the future is to invent it." — Alan Kay',
            '"First, solve the problem. Then, write the code." — John Johnson',
            '"Simplicity is the soul of efficiency." — Austin Freeman',
            '"Code is like humor. When you have to explain it, it\'s bad." — Cory House',
            '"Make it work, make it right, make it fast." — Kent Beck',
        ];
        print(quotes[(Math.random() * quotes.length) | 0], "info");
    },

    markdown: (args) => {
        const filename = args ? args.trim() : "untitled.md";
        if (!filename.endsWith(".md")) {
            print(
                `'${filename}' is not a .md file. Usage: markdown [file.md]`,
                "error",
            );
            return;
        }
        const existing = mdFileStore[filename] || "";
        openMarkdownEditor(filename, existing);
    },
};

// 6. INPUT HANDLING
input.addEventListener("keydown", (e) => {
    // ── ENTER: run the command ───────────────
    if (e.key === "Enter") {
        const command = input.value.trim();
        if (command) {
            executeCommand(command);
            state.history.unshift(command); // newest at front
            state.historyIndex = -1;
            state.liveInput = "";
        }
        input.value = "";
        hint.textContent = "";
        return;
    }

    // up key
    if (e.key === "ArrowUp") {
        e.preventDefault();
        if (state.historyIndex === -1) state.liveInput = input.value;
        if (state.historyIndex < state.history.length - 1) {
            state.historyIndex++;
            input.value = state.history[state.historyIndex];
        }
        moveCursorToEnd();
        return;
    }

    // down key
    if (e.key === "ArrowDown") {
        e.preventDefault();
        if (state.historyIndex > -1) {
            state.historyIndex--;
            input.value =
                state.historyIndex === -1
                    ? state.liveInput
                    : state.history[state.historyIndex];
        }
        moveCursorToEnd();
        return;
    }

    // tab key for autocomplete-hint
    if (e.key === "Tab") {
        e.preventDefault();
        const partial = input.value.trim();
        if (!partial) return;

        const matches = Object.keys(commands).filter((cmd) =>
            cmd.startsWith(partial),
        );

        if (matches.length === 1) {
            input.value = matches[0];
            hint.textContent = "";
        } else if (matches.length > 1) {
            hint.textContent = "  " + matches.join("   ");
        }
        return;
    }

    // Clear hint on any other key
    hint.textContent = "";
});

// 7. COMMAND EXECUTION
function executeCommand(raw) {
    print(`$ ${raw}`, "dim");

    const [cmdName, ...rest] = raw.trim().split(/\s+/);
    const args = rest.join(" ");

    if (commands[cmdName]) {
        commands[cmdName](args);
    } else {
        print(`Command not found: '${cmdName}'. Type 'help'.`, "error");
    }

    // Scroll to bottom after every command
    terminal.scrollTop = terminal.scrollHeight;
}

// 8. OUTPUT RENDERING
function print(txt, type = "") {
    const line = document.createElement("div");
    line.classList.add("line");
    if (type) line.classList.add(type);
    line.textContent = txt;
    terminalOutput.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
}

// 9. TYPING ANIMATION (used for startup banner)
function typeText(txt, type = "banner", speed = 18) {
    return new Promise((resolve) => {
        const line = document.createElement("div");
        line.classList.add("line");
        if (type) line.classList.add(type);
        terminalOutput.appendChild(line);

        let i = 0;
        const iv = setInterval(() => {
            line.textContent += txt[i++];
            terminal.scrollTop = terminal.scrollHeight;
            if (i >= txt.length) {
                clearInterval(iv);
                resolve();
            }
        }, speed);
    });
}

// 10. ANIMATED STARTUP BANNER
async function showBanner() {
    input.disabled = true; // lock input while banner plays

    const art = [
        "  ██╗    ██╗███████╗██████╗       ████████╗███████╗██████╗ ███╗   ███╗",
        "  ██║    ██║██╔════╝██╔══██╗      ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║",
        "  ██║ █╗ ██║█████╗  ██████╔╝         ██║   █████╗  ██████╔╝██╔████╔██║",
        "  ██║███╗██║██╔══╝  ██╔══██╗         ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║",
        "  ╚███╔███╔╝███████╗██████╔╝         ██║   ███████╗██║  ██║██║ ╚═╝ ██║",
        "   ╚══╝╚══╝ ╚══════╝╚═════╝          ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝",
    ];

    for (const row of art) {
        await typeText(row, "banner", 4);
    }

    await typeText("  v1.0.0  —  Abrar's Learning Terminal", "info", 20);
    await typeText('  Type "help" to see available commands.', "dim", 20);

    input.disabled = false;
    input.focus();
}

// 11. HELPERS
function moveCursorToEnd() {
    const len = input.value.length;
    input.setSelectionRange(len, len);
}
// Keep focus on input whenever user clicks anywhere in terminal
terminal.addEventListener("click", () => input.focus());

showBanner();

// 12. MARKDOWN EDITOR
const mdFileStore = {};

// DOM refs for the editor
const mdEditor = document.getElementById("md-editor");
const mdTextarea = document.getElementById("md-textarea");
const mdPreview = document.getElementById("md-preview");
const mdFilename = document.getElementById("md-filename");
const mdMode = document.getElementById("md-mode");
const mdWordcount = document.getElementById("md-wordcount");
const mdCmdline = document.getElementById("md-cmdline");
const mdCmdText = document.getElementById("md-cmdline-text");

// Editor state
const mdState = {
    filename: "untitled.md",
    cmdBuffer: "", // accumulates vim-style : commands
    inCmdMode: false, // true when user has typed ":"
};

// ── OPEN EDITOR ──────────────────────────────
function openMarkdownEditor(filename, content = "") {
    mdState.filename = filename;
    mdState.cmdBuffer = "";
    mdState.inCmdMode = false;

    mdFilename.textContent = filename;
    mdTextarea.value = content;
    mdCmdText.textContent = "";

    renderPreview();
    updateWordCount();

    mdEditor.classList.remove("md-hidden");
    input.disabled = true; // lock terminal input
    hint.style.display = "none";

    setTimeout(() => mdTextarea.focus(), 50);
    print(`Opening ${filename} in markdown editor...`, "info");
    print(
        `Esc → back to terminal  |  :w → save  |  :q! → quit  |  :wq → save & quit`,
        "dim",
    );
}

// ── CLOSE EDITOR ─────────────────────────────
// Hide the overlay, re-enable the terminal input, refocus it.
function closeMarkdownEditor() {
    mdEditor.classList.add("md-hidden");
    input.disabled = false;
    hint.style.display = "";
    input.focus();
}

// ── LIVE PREVIEW ─────────────────────────────
function renderPreview() {
    const raw = mdTextarea.value;
    mdPreview.innerHTML =
        typeof marked !== "undefined"
            ? marked.parse(raw)
            : raw.replace(/\n/g, "<br>");
}

// ── WORD COUNT ───────────────────────────────
function updateWordCount() {
    const words = mdTextarea.value.trim().split(/\s+/).filter(Boolean).length;
    mdWordcount.textContent = `${words} word${words !== 1 ? "s" : ""}`;
}

// ── TEXTAREA INPUT EVENTS ────────────────────
mdTextarea.addEventListener("input", () => {
    renderPreview();
    updateWordCount();
});

// ── KEYBOARD HANDLING IN EDITOR ──────────────
mdTextarea.addEventListener("keydown", (e) => {
    // ── Escape: exit cmd mode or close editor ─
    if (e.key === "Escape") {
        if (mdState.inCmdMode) {
            // cancel command entry
            mdState.inCmdMode = false;
            mdState.cmdBuffer = "";
            mdCmdText.textContent = "";
            mdMode.textContent = "-- NORMAL MODE --";
            mdMode.className = "md-mode-insert";
        } else {
            closeMarkdownEditor();
        }
        return;
    }

    // ── ":" starts command mode ───────────────
    if (e.key === ":" && !mdState.inCmdMode) {
        e.preventDefault();
        mdState.inCmdMode = true;
        mdState.cmdBuffer = ":";
        mdCmdText.textContent = ":";
        mdMode.textContent = "-- COMMAND MODE--";
        mdMode.className = "md-mode-normal";
        return;
    }

    // ── While in command mode: build buffer ───
    if (mdState.inCmdMode) {
        e.preventDefault();

        if (e.key === "Enter") {
            processMdCommand(mdState.cmdBuffer);
            mdState.inCmdMode = false;
            mdState.cmdBuffer = "";
            mdCmdText.textContent = "";
            mdMode.textContent = "-- INSERT MODE--";
            mdMode.className = "md-mode-insert";
            return;
        }

        if (e.key === "Backspace") {
            mdState.cmdBuffer = mdState.cmdBuffer.slice(0, -1);
            if (mdState.cmdBuffer === "") {
                mdState.inCmdMode = false;
                mdMode.textContent = "-- INSERT --";
                mdMode.className = "md-mode-insert";
            }
            mdCmdText.textContent = mdState.cmdBuffer;
            return;
        }

        if (e.key.length === 1) {
            mdState.cmdBuffer += e.key;
            mdCmdText.textContent = mdState.cmdBuffer;
        }
        return;
    }

    // ── Tab: insert 2 spaces (standard in md) ─
    if (e.key === "Tab") {
        e.preventDefault();
        const start = mdTextarea.selectionStart;
        const end = mdTextarea.selectionEnd;
        mdTextarea.value =
            mdTextarea.value.slice(0, start) +
            "  " +
            mdTextarea.value.slice(end);
        mdTextarea.selectionStart = mdTextarea.selectionEnd = start + 2;
        renderPreview();
    }
});

// ── VIM COMMAND PROCESSOR ─────────────────────
/*
  LOGIC:
  :w       → save to mdFileStore + update fakeFS ls listing
  :q       → close (warn if unsaved)
  :wq      → save then close
  anything else → show "E492: Not an editor command"
*/
function processMdCommand(cmd) {
    const c = cmd.trim();

    if (c === ":w" || c === ":wq") {
        // Save
        mdFileStore[mdState.filename] = mdTextarea.value;

        // Add to fakeFS root so `ls` shows it
        if (!fakeFS["/"].includes(mdState.filename)) {
            fakeFS["/"].push(mdState.filename);
        }

        mdCmdText.textContent = `"${mdState.filename}" written`;
        print(`Saved: ${mdState.filename}`, "success");

        if (c === ":wq") {
            setTimeout(() => closeMarkdownEditor(), 600);
        }
        return;
    }

    if (c === ":q") {
        const saved = mdFileStore[mdState.filename] === mdTextarea.value;
        if (!saved && mdTextarea.value !== "") {
            // Warn like vim: E37
            mdCmdText.textContent =
                "E37: No write since last change (use :q! to override)";
        } else {
            closeMarkdownEditor();
        }
        return;
    }

    if (c === ":q!") {
        closeMarkdownEditor();
        return;
    }

    mdCmdText.textContent = `E492: Not an editor command: ${c}`;
}
