package main

import (
	"basics/util"
	"fmt"
	"io"
	"os"
)

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

	eval := []int{2, 4, 6, 8, 10}
	for i, v := range eval {
		fmt.Println(i, v)
	}

	m := map[string]int{
		"a": 1,
		"b": 2,
		"c": 3,
	}

	for i := 1; i < 3; i++ {
		fmt.Println("Loop", i)
		for k, v := range m {
			fmt.Println(k, v)
		}
	}

	// -------------- Iterating over string (for-range) --------------------------------
	samples := []string{"Apple", "Banana", "Cake"}
	for _, sample := range samples {
		for i, r := range sample {
			fmt.Println(i, r, string(r))
		}
		fmt.Println()
	}

loop:
	for i := 1; i <= 10; i++ {
		fmt.Println("This is: ", i)
		switch i {
		case 6:
			break loop
		}
	}

	//-------------------- Functions -------------------------
	fmt.Println("Add function imported here")
	fmt.Println(add(5, 6))

	// 1.
	results, remainder, err := divAndRemainder(4, 2)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(results, remainder, err)
	// 2.
	results2, remainder2, err2 := divAndRemainder(4, 0)
	if err2 != nil {
		fmt.Println(err2)
		// return
	}
	fmt.Println(results2, remainder2, err2)

	// ----------------- Subtract function (imported through util dir) -------------------
	res := util.Subtract(10, 4)
	fmt.Println("sub of 10-4: ", res)

	res2 := util.SubtractWithOptions(util.SubtractOptions{
		A: 10,
		B: 5,
	})
	fmt.Println("This is sub with options", res2)

	res3 := util.SubtractWithOptions(util.SubtractOptions{
		A: 23,
		// B is optional
	})
	fmt.Println(res3)

	// ------------------------------------------ File Handling ---------------------------------------
	// Creat + Write (file)
	file, err := os.Create("file1.txt")
	if err != nil {
		fmt.Println("error while creating file", err)
		return
	}
	// 1. way to write to file
	data := []byte("This is content of the file1 thats overwritten")
	_, err = file.Write(data)
	if err != nil {
		fmt.Println("Error while writing to file", err)
		return
	}
	// 2. way to write to file
	fullName := "Monkey D Luffy"
	level := 19
	_, err = fmt.Fprintf(file, "Name: %s, Level: %d\n", fullName, level)
	if err != nil {
		fmt.Println("Error while writing file: ", err)
		return
	}
	fmt.Println("File created and written successfully")
	file.Close()

	// Read file
	file, err = os.Open("file1.txt")
	if err != nil {
		fmt.Println("Error while opening file: ", err)
		return
	}
	defer file.Close()
	buffer := make([]byte, 1024)
	for {
		n, err := file.Read(buffer)
		if err == io.EOF {
			break
		}
		if err != nil {
			fmt.Println("Error while reading file: ", err)
			return
		}
		fmt.Print(string(buffer[:n]))
	}

	fmt.Println("-------------------- Interfaces -----------------------------------")
	rect := Rectangle{width: 5, height: 10}
	circle := Circle{radius: 2}

	fmt.Println("Area of Rectangle: ", calculateArea(rect))
	fmt.Println("Area of Circle: ", calculateArea(circle))

	mysteryBox := interface{}("This is a string")
	describeInterface(10.2)

	// Type Assertion -> It checks whether the underlying value(mysteryBox) is int or not. Basically, checking the type
	retrievedInt, ok := mysteryBox.(int)
	if ok {
		fmt.Println("retrieved Int: ", retrievedInt)
	} else {
		fmt.Println("value is not int")
	}

	// embedding interface (geometry)
	areaAndPerimeter(rect)

}
