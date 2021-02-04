  
package main

import (
	"fmt"
	"io"
	"net/http"
)

type writerWeb struct{}

func (writerWeb) Write(p []byte) (int, error) {
	// p is just the ASCII code 
	// fmt.Println(p)
	// string convert the ASCII code to text
	fmt.Println(string(p))
	return len(p), nil
}

func main() {
	response, err := http.Get("https://golang.org/pkg/io")
	if err != nil {
		fmt.Println(err)
	}
	e := writerWeb{}
	// io.Copy get the data from response.Body
	// and past it to the writerWeb
	// func Copy(dst Writer, src Reader)
	io.Copy(e, response.Body)
}