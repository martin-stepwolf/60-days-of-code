package main // any name is valid

import (
	// All the libraries used by the program
	"bufio"
	"fmt"
	"os"
	"strconv"
	"regexp"
)

// struct is a type of data defined by the programmer.
// It could have methods and properties
type calc struct{}

// if the name starts with Upper letter is a private function
// if the name starts with Lower letter is a public function
func (calc) operate(valueone int, operation string, valuetwo int) int {
	// var nameVariable string = "value" //normal way to initiate a variable
	// with := go infer the type
	switch operation {
	case "+":
		return valueone + valuetwo
	case "-":
		return valueone - valuetwo
	case "*":
		return valueone * valuetwo
	case "/":
		return valueone / valuetwo
	default:
		fmt.Println("Error in the operation")
		return 0
	}
}

func parse(input string) int {
	// _ is defined like a wildcard a variable in null
	// because of Atoi return two values
	operador, _ := strconv.Atoi(input)
	return operador
}

func readInput() string {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	return scanner.Text()
}

// The primary function
func main() {
	fmt.Println("Type an operation (e.g 2+2, 5*5, 8-9, 7/8)")
	regex := regexp.MustCompile(`^(\d+)([\+\-\*\/])(\d+)$`)
	input := readInput()
	fmt.Println()
	if regex.Match([]byte(input)) {
		c := calc{}
		valueone := parse(regex.ReplaceAllString(input, "$1"))
		operation := regex.ReplaceAllString(input, "$2")
		valuetwo := parse(regex.ReplaceAllString(input, "$3"))
		fmt.Println(c.operate(valueone, operation, valuetwo))
		} else {
		fmt.Println("The input is not valid")
	}
}
