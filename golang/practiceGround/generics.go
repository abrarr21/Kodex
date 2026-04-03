package main

import "fmt"

// map function with generic
func Map[T int | float64](s []T, f func(T) T) []T {
	newSlice := make([]T, len(s))

	for index, value := range s {
		newSlice[index] = f(value)
	}

	return newSlice
}

// filter function with generic
func Filter[T int | float64](s []T, f func(T) bool) []T {
	var newSlice []T

	for _, value := range s {
		if f(value) {
			newSlice = append(newSlice, value)
		}
	}
	return newSlice
}

// Reduce function with generic
func Reduce[T int | float64](s []T, initial T, f func(T, T) T) T {
	result := initial

	for _, value := range s {
		result = f(result, value)
	}
	return result
}

func main3() {
	nums := []int{1, 2, 3, 4, 5}
	squared := Map(nums, func(m int) int {
		return m * m
	})
	fmt.Println(squared)

	nums2 := []int{11, 22, 44, 55, 33, 66}
	filteredNum := Filter(nums2, func(m int) bool {
		return m > 30
	})
	fmt.Println(filteredNum)

	nums3 := []int{1, 2, 3, 4, 5}
	sum := Reduce(nums3, 0, func(acc int, val int) int {
		return acc + val
	})
	fmt.Println(sum)
}
