package main

import "errors"

func add(a, b int) int {
	return a + b
}

func divAndRemainder(num, denom int) (int, int, error) {
	if denom == 0 {
		return 0, 0, errors.New("can't divide by zero")
	}

	return num / denom, num % denom, nil
}
