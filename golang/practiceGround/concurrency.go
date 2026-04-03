package main

import (
	"fmt"
	"sync"
	"time"
)

type Result struct {
	Url string
	Err error
}

func worker(url string, wg *sync.WaitGroup, resultChannel chan Result) {
	defer wg.Done()
	time.Sleep(50 * time.Millisecond)
	fmt.Println("Processing Done", url)
	resultChannel <- Result{
		Url: url,
		Err: nil,
	}
}

func main222222() {
	var wg sync.WaitGroup
	resultChannel := make(chan Result, 10)
	startTime := time.Now()

	wg.Add(10)
	go worker("Image1.png", &wg, resultChannel)
	go worker("Image2.png", &wg, resultChannel)
	go worker("Image3.png", &wg, resultChannel)
	go worker("Image4.png", &wg, resultChannel)
	go worker("Image5.png", &wg, resultChannel)
	go worker("Image6.png", &wg, resultChannel)
	go worker("Image7.png", &wg, resultChannel)
	go worker("Image8.png", &wg, resultChannel)
	go worker("Image9.png", &wg, resultChannel)
	go worker("Image10.png", &wg, resultChannel)

	wg.Wait()
	close(resultChannel)

	for result := range resultChannel {
		fmt.Println("Data recieved: ", result)
	}

	fmt.Println("Time Taken: ", time.Since(startTime))
	// ch := make(chan string)
	// ch2 := make(chan string)
	// ch3 := make(chan string)
	//
	// go func() {
	// 	time.Sleep(3 * time.Second)
	// 	ch <- "one"
	// }()
	//
	// go func() {
	// 	time.Sleep(5 * time.Second)
	// 	ch2 <- "Two"
	// }()
	//
	// go third(ch3)
	//
	// select {
	// case val := <-ch:
	// 	fmt.Println("received from ch:", val)
	// case val := <-ch2:
	// 	fmt.Println("received from ch2: ", val)
	// case val := <-ch3:
	// 	fmt.Println("received from ch3: ", val)
	// default:
	// 	fmt.Println("nothing ready, moving on")
	// }
}

// func third(ch3 chan string) {
// 	time.Sleep(1 * time.Second)
// 	ch3 <- "Three"
// }
