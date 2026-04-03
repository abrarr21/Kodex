package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/joho/godotenv"
)

type User struct {
	Name  string `json:"name"`
	Age   int    `json:"age"`
	Email string `json:"email"`
}

func home(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome home")
}

func user(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var u User
	if err := json.NewDecoder(r.Body).Decode(&u); err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}

	if u.Name == "" || u.Age == 0 || u.Email == "" {
		http.Error(w, "Missing fields", http.StatusBadRequest)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	res := map[string]any{
		"time":    time.Now(),
		"message": "info recieved",
		"data":    u,
	}

	json.NewEncoder(w).Encode(res)

}

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env found")
	}
	dsn := os.Getenv("DATABASE")
	if dsn == "" {
		fmt.Println("database url not provided")
	}

	db, err := New(dsn)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	mux := http.NewServeMux()
	mux.Handle("GET /home", http.HandlerFunc(home))
	mux.HandleFunc("POST /user", user)

	srv := &http.Server{
		Addr:         ":6969",
		Handler:      mux,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 5 * time.Second,
		IdleTimeout:  30 * time.Second,
	}
	log.Println("Server running at port:6969")
	log.Fatal(srv.ListenAndServe())
}
