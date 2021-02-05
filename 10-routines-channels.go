package main

import (
	"fmt"
	"net/http"
	"time"
)

/*
	this program validate if a url works and use routines and channels
	to make the request more efficient

	without go routines each http request is executed one per one
	with go routine each http request is executed at the same time
	it does not matter if the request is late

	with the channels we can link the request to sent and get data
	and show it
*/
func main() {
	start_time := time.Now()
	// a channel is created f	or the two-way communication in the http request
	channel := make(chan string)
	urls := []string{
		"https://golang.org/",
		"https://twitter.com",
		"https://duckduckgo.com/",
		"https://youtube.com",
		"https://no_url.com/",
	}

	for _, server := range urls {
		// with go, the function is executed in the background
		go checkServer(server, channel)
	}

	// <-channel is like listener where when a process
	//  sent a data in the channel, PrintLl is executed
	// with this for the listener is created 5 times, each one per url
	for index, _ := range urls {
		fmt.Println(index+1, <-channel)
		// time.Sleep(5 * time.Second)
	}

	// Go does not have a while function, but it could be a for
	// for {
		// code
	// }
	// to manage its break, we can use a variable and 
	// the function break inside

	exec_time := time.Since(start_time)
	fmt.Printf("Time: %s", exec_time)
}

func checkServer(server string, channel chan string) {
	_, err := http.Get(server)
	if err != nil {
		// with <- the data is sent to the channel
		// the channel just allow strings
		channel <- server + " does not work"
	} else {
		channel <- server + " works"
	}
}