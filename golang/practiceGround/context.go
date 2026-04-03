package main

import (
	"context"
	"fmt"
	"time"
)

func doWork(ctx context.Context) {

	for {
		select {
		case x := <-ctx.Done():
			fmt.Println(x)
			fmt.Println("Work stopped: ", ctx.Err())
			return
		default:
			fmt.Println("Working.....")
			time.Sleep(400 * time.Millisecond)
		}
	}
}

func main232223() {
	ctx, cancel := context.WithCancel(context.Background())

	go doWork(ctx)

	time.Sleep(2 * time.Second)
	cancel()
	time.Sleep(100 * time.Millisecond)
}
