package main

import "fmt"

// type Stack[T any] struct {
// 	vals []T
// }
// Any means any type but not every type supports == (such as slice and maps cannot be compared using ==)
// SOLUTION --> comparable

type Stack[T comparable] struct {
	vals []T
}

func (s *Stack[T]) Push(val T) {
	s.vals = append(s.vals, val)
}

func (s Stack[T]) Contains(vals T) bool {
	for _, v := range s.vals {
		if v == vals {
			return true
		}
	}
	return false
}

// Generic Map functions
func Map[T int | float64](s []T, f func(T) T) []T {
	result := make([]T, len(s)) // made new slice with same length

	for i, v := range s {
		result[i] = f(v) // Apply function on every element
	}
	return result
}

// Generic Filter function
func Filter[T int | float64](s []T, f func(T) bool) []T {
	var newSlice []T // empty slice

	for _, v := range s {
		if f(v) { // If condition is true
			newSlice = append(newSlice, v) // Add it
		}
	}
	return newSlice
}

// Generic Reduce function
func Reduce[T int | float64](s []T, initial T, f func(T, T) T) T {
	result := initial // starting value --> initializing accumulator = 0

	for _, v := range s {
		result = f(result, v) // accumulator update --> which is (0, elements of s on every iteration)
	}
	return result
}

func main() {
	var intStack Stack[int]
	intStack.Push(10)
	intStack.Push(24)
	fmt.Println(intStack.Contains(38))
	fmt.Println(intStack)

	// (map func) -> passing square function
	numbers := []int{1, 2, 3, 4, 5}
	squared := Map(numbers, func(n int) int {
		return n * n
	})
	fmt.Println(squared)

	// (filter func) -> print no. greater than 50
	nums := []int{10, 60, 20, 52, 50}
	filtered := Filter(nums, func(n int) bool {
		return n > 50
	})
	fmt.Println(filtered)

	// (Reduce func) -> sum all the element
	sum := Reduce(nums, 0, func(acc int, val int) int {
		return acc + val
	})
	fmt.Println(sum)
}
