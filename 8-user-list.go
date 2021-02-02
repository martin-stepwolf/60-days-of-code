package main

import "fmt"

type userList struct {
	users []*user
}

type user struct {
	name        string
	last_name 	string
	active   	bool
}

// * creates a pointer to the value in memory
// Without *, the main data is not updated
func (t *userList) addUser(tl *user) {
	t.users = append(t.users, tl)
}

func (t *user) updateName(name string) {
	t.name = name
}

func (t *user) updateLastName(last_name string) {
	t.last_name = last_name
}

func (t *user) tagActive() {
	t.active = true
}

func (t *userList) deleteUser(index int) {
	// [:] slice notation that has a range of the array
	// [:index], the values before index, [index+1:] the values after index+1
	// With both notation index is not included
	t.users = append(t.users[:index], t.users[index+1:]...)
	// ... is the ellipsis operator allows to get many parameters
	// in this case appends gets many parameters given by slices notation
}

func (t *userList) printUsers() {
	fmt.Println("Users:")
	for i, user := range t.users {
		if user.active {
			fmt.Print("(active) ")
		}else {
			fmt.Print("(no active) ")
		}
		fmt.Println(i, user.name, user.last_name)
	}
}

func (t *userList) printActiveUsers() {
	fmt.Println("Active users:")
	for i, user := range t.users {
		if user.active {
			fmt.Println(i, user.name, user.last_name)
		}
	}
}

func main() {

	// & get the memory reference about a variable
	t1 := &user{
		name:      "User",
		last_name: "One",
		active:     false,
	}

	t2 := &user{
		name:      "User",
		last_name: "Two",
		active:  	true,
	}
	
	t3 := &user{
		name:      "User",
		last_name: "Three",
		active:  	true,
	}

	// A list is created with the struct of user and userList
	list := &userList{
		users: []*user{
			t1, t2,
		},
	}

	list.addUser(t3)
	list.printUsers()
	list.printActiveUsers()
}
