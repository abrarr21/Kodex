package main

import "fmt"

type Shape interface {
	Area() float64
	Perimeter() float64
	DoubleWidth() float64
	TripleHeight() float64
}

type Rectangle struct {
	width  float64
	height float64
}

func (r *Rectangle) Area() float64 {
	return r.height * r.width // yaha kuch change nahi ho rha (height/width)
}

func (r *Rectangle) Perimeter() float64 {
	return 2 * (r.height + r.width) // yaha bhi kuch change nhi ho rha (height/width)
}

func (r *Rectangle) DoubleWidth() float64 {
	r.width = 2 * r.width // yaha width change ho rha hai and since its a pointer reciever, humare original rect ki width double ho jayegi (5 se 10)
	return r.width
}

func (r Rectangle) TripleHeight() float64 {
	r.height = 3 * r.height // yaha humne height change karna define kiya hai aur jab rect isme pass hoga to original rect value mein koi change nahi ayega bcz rect ki copy pass hogi isme since, its a value reciever
	return r.height
}

func print(s Shape) {
	fmt.Println("Area: ", s.Area())
	fmt.Println("Perimeter: ", s.Perimeter())
	fmt.Println("DoubleWidth: ", s.DoubleWidth())
	fmt.Println("TripleHeight: ", s.TripleHeight())
}

// Q3. ---------------------------------------
type Counter struct {
	count int
}

func (c Counter) Increment() {
	c.count++
}

func (c *Counter) Decrement() {
	c.count--
}

func (c Counter) Reset() {
	c.count = 0
}

// Q4. (single interface, multiple types) ----------------------------------------------------------------
type Shape2 interface {
	Area() float64
}
type Square struct {
	side float64
}

func (s Square) Area() float64 {
	return s.side * s.side
}

type Circle struct {
	Radius float64
}

func (c Circle) Area() float64 {
	return 3.14 * c.Radius * c.Radius
}

type Triangle struct {
	Base   float64
	Height float64
}

func (t Triangle) Area() float64 {
	return 0.5 * t.Base * t.Height
}

// Q6. --------------------------------------------------------------------
func Describe(i interface{}) {
	fmt.Printf("Value: %v, Type: %T\n", i, i)
}

// Q7. (Type switch) -----------------------------------------------------
func PrintShapeDetails(s Shape2) {
	switch v := s.(type) {
	case Circle:
		fmt.Println("This is a Circle with Area: ", v.Area())
	case Square:
		fmt.Println("This is a Square with Area: ", v.Area())
	case Triangle:
		fmt.Println("This is a Triangle with Area: ", v.Area())
	}
}

// Q8. (Interface with multiple Methods) ------------------------------------
type Animal interface {
	Speak() string
	Move() string
}

type Dog struct{}

func (d Dog) Speak() string {
	return "Woof"
}
func (d Dog) Move() string {
	return "Runs"
}

type Bird struct{}

func (b Bird) Speak() string {
	return "Chirp"
}

// Q9. (Interface Nil Trap) -------------------------------------------------
type MyError struct{}

func (e *MyError) Error() string {
	return "Error"
}

func returnsError() error {
	var e *MyError = nil // e is a nil pointer of type *MyError
	return e             // interface now holds (type: *MyError, value: nil)
}

func main2() {

	rect := Rectangle{height: 2, width: 5}
	fmt.Println("Original value of rect: ", rect)
	print(&rect)
	fmt.Println("After changes: ", rect)

	fmt.Println("\n----------------------- Q3. ---------------------------")

	c := Counter{}
	fmt.Println("Original value of c: ", c)
	c.Increment()
	c.Increment()
	fmt.Println(c.count)
	fmt.Println("value didn't change, bcz c is passed to value reciever : ", c.count)

	fmt.Println("Now passing to pointer reciever(Decrement)")
	c.Decrement()
	fmt.Println("Value Changed: ", c.count)
	c.Reset()
	fmt.Println("Reset won't work either bcz c is passed to value reciever", c.count)

	fmt.Println("\n-------------------------- Q4. ---------------------------")
	shapes := []Shape2{
		Square{side: 2},
		Circle{Radius: 3},
		Triangle{Base: 6, Height: 2},
	}

	for _, eachShapes := range shapes {
		fmt.Println("Area: ", eachShapes.Area())
	}

	fmt.Println("\n------------------------------ Q6. ------------------------")
	i := 10
	Describe(i)
	st := "Hello"
	Describe(st)
	triangle2 := Triangle{Base: 2, Height: 3}
	Describe(triangle2)

	fmt.Println("\n------------------------------- Q7. ------------------------")
	var sq Shape2
	sq = Square{side: 5}
	PrintShapeDetails(sq)

	sq = Circle{Radius: 3}
	PrintShapeDetails(sq)

	fmt.Println("\n------------------------------ Q8.------------------------")
	var a Animal
	a = Dog{}
	fmt.Println(a.Speak(), "-", a.Move())

	bb := Bird{}
	fmt.Println(bb.Speak())
	// fmt.Println(bb.Speak(), "-", bb.Move())
	// All interface methods must be implemented for a type to satisfy it. Bird struct does not specify move method so it doesn't satisfy the Animal interface

	fmt.Println("\n------------------------------- Q9. -----------------------")
	err := returnsError()

	// check if err is nil
	if err != nil {
		fmt.Println("Error is not nil")
	} else {
		fmt.Println("Error is nil")
	}

	// Explanation:
	// err is an interface value.
	// Its internal representation is (type: *MyError, value: nil)
	// In Go, an interface is considered nil ONLY if both type AND value are nil.
	// Here, type is *MyError (not nil), value is nil → interface != nil

	// Proper way to check if the underlying pointer is nil:
	if e, ok := err.(*MyError); ok && e == nil {
		fmt.Println("err contains a nil *MyError") // ✅ This prints
	} else {
		fmt.Println("err is a real error")
	}
}
