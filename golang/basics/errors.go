package main

import (
	"errors"
	"fmt"
)

type MyCustomError struct {
	Message string
	Code    int
}

func (mce MyCustomError) Error() string {
	return fmt.Sprintf("Code: %d AND Message: %s ", mce.Code, mce.Message)
}

func getfile(name string) (string, error) {
	if name == "data" {
		return "", MyCustomError{
			Code:    101,
			Message: "File not found",
		}
	}
	return "file exists", nil
}

// Q1.
type HttpError struct {
	StatusCode int
	Message    string
}

func (he HttpError) Error() string {
	return fmt.Sprintf("HttpError= %s : StatusCode= %d", he.Message, he.StatusCode)
}

func fetchPage(url string) (string, error) {
	if url != "home" {
		return "", HttpError{
			StatusCode: 404,
			Message:    "Page not found",
		}
	}

	return "Page content", nil
}

// Q2.
type ValidationError struct {
	Field   string
	Problem string
}

func (ve ValidationError) Error() string {
	return fmt.Sprintf("Validation Failed on %s : %s", ve.Field, ve.Problem)
}

func validateAge(age int) error {
	if age < 0 || age > 150 {
		return ValidationError{
			Field:   "age",
			Problem: "greater than 150 or lower than 0",
		}
	}
	return nil
}

// Q3.
type FileError struct {
	Filename string
	Op       string
}

func (f FileError) Error() string {
	return fmt.Sprintf("Failed to %s %s", f.Op, f.Filename)
}

func readFile(name string) (string, error) {
	if name == "secret.txt" {
		return "", fmt.Errorf("Cannot process file: %w", FileError{
			Filename: name,
			Op:       "read",
		})
	}
	return "File content", nil
}

// Example of errors.Is()
var ErrNotFound = errors.New("not found")

func findFile(name string) error {
	if name != "data.txt" {
		// wrap the sentinel error
		return fmt.Errorf("failed to find file: %w", ErrNotFound)
	}
	return nil
}

func mainErr() {
	cont, err := getfile("data")
	if err != nil {
		// if e, ok := err.(MyCustomError); ok {
		// 	fmt.Println("Status code: ", e.Code, "Message: ", e.Message)
		// }
		fmt.Println(err)
	}
	fmt.Println(cont)

	// Q1.
	fmt.Println("\n-------------------- Q1 --------------------------------------------")
	content, err := fetchPage("home")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(content)

	fmt.Println("\n-------------------------- Q2 ---------------------------------------")
	errr := validateAge(-5)
	if errr != nil {
		fmt.Println(errr) // prints error returned by method function

		// Access ValidationError struct directly to print Field
		if e, ok := errr.(ValidationError); ok {
			fmt.Println(e.Field)
		}
	}

	fmt.Println("\n-------------------------- Q3 ---------------------------------------")
	c, err := readFile("secret.txt")
	if err != nil {
		fmt.Println("Raw error: ", err)

		// Extract the original FileError
		var fe FileError
		//errors.As kehta hai: “Aha, ye error FileError hai. Chalo iski sari details leke pointer ke through fe me dal dete hain.”
		//Ab fe.Filename aur fe.Op aap access kar sakte ho.
		if errors.As(err, &fe) {
			fmt.Println("FileError detected!")
			fmt.Println("FileName:", fe.Filename)
			fmt.Println("Operation:", fe.Op)
		}
	}
	fmt.Println(c)

	fmt.Println("\n-------------------------- Example of errors.Is() ---------------------------------------")
	er := findFile("secret.txt")
	// Check exact error
	if errors.Is(er, ErrNotFound) {
		fmt.Println("File was not found!")
	} else {
		fmt.Println("File found")
	}

	fmt.Println("\n--------------------- Panic and Recover ----------------------------")
	res, _ := safeDivide(10, 00)
	fmt.Println("Result: ", res)

	for _, val := range []int{1, 2, 4, 0, 7} {
		div(val)
	}
}

// Panic and Recover
func safeDivide(a, b int) (int, error) {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("Recovered in Library -> ", r)
		}
	}()
	return a / b, nil
}

func div(i int) {
	defer func() {
		if v := recover(); v != nil {
			fmt.Println("Recovered from library ->  ", v)
		}
	}()
	fmt.Println(60 / i)
}
