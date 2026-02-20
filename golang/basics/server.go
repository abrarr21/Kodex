package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
)

type ContextKey string

const RequestIDKey ContextKey = "requestID"

// Attaching requestID to the Request body via Context
func home(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Only GET method allowed", http.StatusBadRequest)
		return
	}
	ctx := context.WithValue(context.Background(), RequestIDKey, 2342342)

	r = r.WithContext(ctx)

	reqId := r.Context().Value(RequestIDKey)

	fmt.Println("Request Hit")
	fmt.Println("this is request body", r)
	fmt.Println("This is Request context: ", ctx)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]any{
		"Message":   "Request have been Processed",
		"RequestID": reqId,
	})

}

type User struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

// using marshal to send JSON response
func user(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Only Get method allowed", http.StatusBadRequest)
		return
	}

	u := User{
		Name:  "Abrar",
		Email: "abc@gmail.com",
	}

	// data := []byte("This is the user page")
	// []byte --> base64 string which give "Vsdkfsjlkajsdfkj" therefore we need to string(data) before consoling it.

	js, err := json.Marshal(u)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

// Using Decode for JSON -> user struct
func datacol(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Only POST method allowed", http.StatusMethodNotAllowed)
		return
	}

	var user User

	decoder := json.NewDecoder(r.Body)
	decoder.DisallowUnknownFields()
	err := decoder.Decode(&user)
	if err != nil {
		http.Error(w, "Invalid JSON: "+err.Error(), http.StatusBadRequest)
		return
	}

	fmt.Printf("Recieved %v\n", user)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(user)
}

// using Unmarshal to JSON --> user struct
func collect(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Only POST method allowed", http.StatusMethodNotAllowed)
		return
	}

	// Read raw bytes
	body, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	var user2 User
	err = json.Unmarshal(body, &user2)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	fmt.Printf("This is the collected data: %v", user2)

	b, err := json.Marshal(user2)
	w.Header().Set("Content-Type", "application/json")
	w.Write(b)
}

type Movie struct {
	ID    string `json:"id"`
	Title string `json:"title"`
}

// getting movie via path parameter
func getMovie(w http.ResponseWriter, r *http.Request) {
	// URL should be /movie/{id}/{movie}
	parts := strings.Split(r.URL.Path, "/")
	if len(parts) < 4 {
		http.Error(w, "Invalid URL. /movie/{id}/{title}", http.StatusBadRequest)
		return
	}

	movie := Movie{
		ID:    parts[2],
		Title: parts[3],
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(movie)
}

// getting data via path parameter dynamically
func getMoviedynamically(w http.ResponseWriter, r *http.Request) {
	// Remove the prefix /movie/
	path := strings.TrimPrefix(r.URL.Path, "/movie/")
	if path == "" {
		http.Error(w, "Movie path cannot be empty", http.StatusBadRequest)
		return
	}

	// Split remaining path into dynamic segments
	segments := strings.Split(path, "/")

	// Return segments as JSON
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string][]string{
		"segments": segments,
	})
}

// get data via query parameter
func getbyquery(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Only get method allowed", http.StatusMethodNotAllowed)
		return
	}

	query := r.URL.Query()
	name := query.Get("name")
	age := query.Get("age")
	fmt.Fprintf(w, "The data in the query parameter is: %s ", name)
	fmt.Fprintf(w, "The data in the query parameter is: %s ", age)

}

// get data via header
func header(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Only get method allowed", http.StatusMethodNotAllowed)
		return
	}

	auth := r.Header.Get("Authorization")
	token := strings.Split(auth, " ")

	fmt.Fprintf(w, "The data Recieved from Header is %s", token[1])
}

// get data via Cookie
func kookie(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Only GET method allowed", http.StatusMethodNotAllowed)
		return
	}

	kookie, err := r.Cookie("session_id")
	if err != nil {
		if err == http.ErrNoCookie {
			http.Error(w, "session_id cookie not found", http.StatusBadRequest)
			return
		}
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	fmt.Fprintf(w, "The session id is %s", kookie.Value)
}

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/home", home)
	mux.HandleFunc("/user", user)
	mux.HandleFunc("/data", datacol)
	mux.HandleFunc("/collect", collect)
	mux.HandleFunc("/movie/", getMovie)
	mux.HandleFunc("/movies/", getMoviedynamically)
	mux.HandleFunc("/getbyquery", getbyquery)
	mux.HandleFunc("/header", header)
	mux.HandleFunc("/kookie", kookie)

	srv := &http.Server{
		Addr:    ":6969",
		Handler: mux,
	}

	fmt.Println("The server is starting at port: ", srv.Addr)
	err := srv.ListenAndServe()
	if err != nil {
		fmt.Println("error while starting server: ", err)
	}

}
