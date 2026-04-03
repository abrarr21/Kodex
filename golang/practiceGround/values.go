package main

import "fmt"

func main2222() {

	var x *int
	fmt.Println(x)
	fmt.Println(x == nil)

	var a = []int{}
	fmt.Println(a)
	fmt.Println(a == nil)

	var b []int
	fmt.Println(b)
	fmt.Println(b == nil)

	c := make([]int, 10)
	fmt.Println(c, len(c), cap(c))
	fmt.Println(c == nil)

	c = append(c, 12)
	fmt.Println(c, len(c), cap(c))

	c[1] = 42
	fmt.Println(c, len(c), cap(c))

	str := make([]string, 10)
	fmt.Println(str, len(str), cap(str))

	var str2 []string
	fmt.Println(str2)
	fmt.Println(str2 == nil)

	s := []string{"Hello", "World"}
	fmt.Println(s)
	fmt.Println(len(s), cap(s))
	s = append(s, "ace")
	fmt.Println(s, len(s), cap(s))

	mp := map[string]string{
		"name":       "ace",
		"profession": "2nd division commander",
	}
	fmt.Println(mp, len(mp))

	var mp3 map[string]string
	fmt.Println(mp3, len(mp3))
	fmt.Println(mp3 == nil)
	// mp3["ace"] = "name"
	// fmt.Println(mp3, len(mp3))

	mp4 := make(map[string]string)
	fmt.Println(mp4, len(mp4))
	mp4["name"] = "Monkey D Luffy"
	fmt.Println(mp4, len(mp4))
	fmt.Print(mp4 == nil)

	var random string
	fmt.Println(random)
	random = "random"
	fmt.Println(random)
}
