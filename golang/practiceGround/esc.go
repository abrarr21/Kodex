package main

import "fmt"

func printAnything(val any) {
	fmt.Println(val)
}

func createStudent() *string {
	name := "Alice"
	return &name
}

func main324234() {
	studentName := createStudent()
	fmt.Println(*studentName)

	message := "Hello World"
	printAnything(message)

	num := 54
	printAnything(num)
}
