package main

import (
	"fmt"
	"math"
)

type Shape interface {
	Area() float64 // Here, How this method will work is not declared
}

type Rectangle struct {
	width  float64
	height float64
}

func (r Rectangle) Area() float64 { // Implemented Shape interface by using (Area()) method
	return r.width * r.height // what Implementation(How Area() will work) this interface will perform is defined here
}

type Circle struct {
	radius float64
}

func (c Circle) Area() float64 {
	return math.Pi * c.radius * c.radius
}

func calculateArea(s Shape) float64 {
	return s.Area()
}

// Type of interface , empty interface
func describeInterface(t interface{}) {
	fmt.Printf("Type: %T, Value: %v\n", t, t)
}

// Embedding Interfaces
type Measure interface {
	perimeter() float64
}

type Geometry interface {
	Shape
	Measure // shape, Measure interface are embedded here. Geometry interface now has the function/methods/definition of Shape and Measure
}

func (r Rectangle) perimeter() float64 {
	return 2 * (r.height + r.width)
}

func areaAndPerimeter(g Geometry) {
	fmt.Println("Area :", g.Area())
	fmt.Println("perimeter : ", g.perimeter())
}
