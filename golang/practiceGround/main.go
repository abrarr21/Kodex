package main

import "fmt"

func add(a, b int) int {
	return a + b
}

func isEven(n int) bool {
	if n%2 == 0 {
		return true
	}
	return false
}

func swap(a *int, b *int) {
	temp := *a
	*a = *b
	*b = temp
}

type Person struct {
	Name string
	Age  int
}

func birthday(p *Person) {
	p.Age++
}

func increment(n *int) {
	*n += 1
}

func sumAndAverage(nums []int) (int, float64) {
	sum := 0
	for _, value := range nums {
		sum = sum + value
	}
	average := float64(sum) / float64(len(nums))
	return sum, average
}

func main1() {
	sum := add(3, 5)
	fmt.Println(sum)

	ans := isEven(4)
	fmt.Println(ans)

	x := 5
	y := 10
	fmt.Println("Before swap: x=", x, "y=", y)
	swap(&x, &y)
	fmt.Println("After swap: x=", x, "y=", y)

	p := Person{Name: "Luffy", Age: 19}
	fmt.Println(p)

	birthday(&p)
	fmt.Println("After birthday: ", p)

	people := []Person{
		{Name: "Zoro", Age: 21},
		{Name: "Sanji", Age: 20},
		{Name: "Nami", Age: 18},
	}
	fmt.Println("Print people older than 18")

	for index, person := range people {
		if person.Age > 18 {
			fmt.Println(person.Name, index)
		}
	}

	a := 10
	b := &a
	fmt.Println("before increment: ", *b)
	increment(b)
	fmt.Println("After increment: ", *b)

	arr := [5]int{1, 2, 3, 4, 5}
	fmt.Println("Array: ", arr, "len", len(arr))

	fruits := []string{"Apple", "Banana", "Kiwi"}
	fmt.Println("Before append", fruits)

	fruits = append(fruits, "mango")
	fmt.Println("After adding 1 fruits", fruits)

	fruits = append(fruits, "Watermelons")
	fmt.Println("After adding 1 fruits", fruits)

	sumOfarr := 0
	for _, num := range arr {
		sumOfarr += num
	}
	fmt.Println("Sum of Arrays: ", sumOfarr)

	ages := make(map[string]int)
	ages["Gon"] = 10
	ages["Madara"] = 1000
	fmt.Println(ages)

	for name, _ := range ages {
		fmt.Println("key: ", name)
	}

	fmt.Println("---------sumAndAverage---")
	ansSum, ansAvg := sumAndAverage([]int{1, 2, 3, 4, 5})
	fmt.Println("sum: ", ansSum)
	fmt.Println("average: ", ansAvg)

	fmt.Println("----------- Types, Methods and Interfaces -------------------")
}
