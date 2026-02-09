package main

import "fmt"

func main() {
	fmt.Println("Basics of Arrays/Slices")

	num := 1_000_000
	fmt.Println(num)

	// [5]int -> array (fixed size, type includes the length)
	// []int -> dynamic size, no length in the type

	//---------------Array (length is part of type)-----------------
	var a [3]int
	b := [3]int{1, 2, 3}
	c := [...]int{1, 2, 3} //compiler counts length
	fmt.Println(a, b, c)
	//-------------------------------------------------------------

	//-------------Slice (no len in the type)----------------------
	var s []int            // nil slice
	t := []int{}           // empty slice
	u := []int{10, 20, 30} // slice literal
	v := make([]int, 3)    // len=3
	w := make([]int, 0)    // empty but not nil
	fmt.Println(s, t, u, v, w)
	//-------------------------------------------------------------

	//-------------Derived slices---------------------------------
	arr := [5]int{29, 28, 27, 26, 25}
	sub := arr[1:4] // slice backed by array
	fmt.Println(arr, sub)
	//-------------------------------------------------------------

	var x []int // x has no slice at all
	fmt.Println(x)
	fmt.Println(len(x))
	fmt.Println(x == nil) //true

	var y = []int{} // y is a real slice with 0 elements
	fmt.Println(y)
	fmt.Println(len(y))
	fmt.Println(y == nil) //false

	// --------------- String, Runes and Bytes -------------------------------
	str23 := "Hello"
	b5 := str23[1]
	fmt.Println(b5) // returns 101 -> byte value

	s12 := "Hello 😂"
	fmt.Println(s12[6:])  // returns emoji
	fmt.Println(s12[4:7]) // it won't return emoji bcz emoji = 4 bytes
	fmt.Println(len(s12)) // 10 bytes

}
