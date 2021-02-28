export {};

// [1, 'user']
let user: [number, string];
user = [1, 'martin'];

console.log('user', user);
console.log('username', user[1]);
console.log('username.length', user[1].length);
console.log('id', user[0]);

// Tuples many values
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'name', true];
console.log('userInfo', userInfo);

// Array Tuples
let array: [number, string][] = [];
array.push([1, 'martin']); // 0
array.push([2, 'name']); // 1
array.push([3, 'otherName']); // 2
console.log('array', array);

// Use of functions Array
// otherName -> otherName001

array[2][1] = array[2][1].concat('001'); // otherName001
console.log('array', array);
