package util

func Subtract(a, b int) int {
	return a - b
}

type SubtractOptions struct {
	A int
	B int
}

func SubtractWithOptions(opts SubtractOptions) int {
	return opts.A - opts.B
}
