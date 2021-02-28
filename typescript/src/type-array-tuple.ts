// Brackets []

// Type Explicit
let users: string[];
users = ['martin', 'name', 'otherName'];
// users = [1, true, 'test']; // Error

// Type Infer
let otherUsers = ['martin', 'name', 'otherName'];
// otherUsers = [1, true, 'test']; // Error

// Array<TYPE>
let pictureTitles: Array<string>;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];

console.log('first user', users[0]);
console.log('fist title', pictureTitles[0]);

console.log('users.length', users.length);

users.push('User');
users.sort();
console.log('users', users);
