// Number
// Explicit
let phone: number;
phone = 1;
phone = 123213;
// phone = 'hello'; // Error

// Infer
let phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; // Error

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Type: Boolean
// Tipado Explicit
let isPro: boolean;
isPro = true;
// isPro = 1;

// Infer
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error!

// Strings
let username: string = 'martinez';
username = "martin";
// username = true; // Error

// Template String
// Use of back-tick `
let userInfo: string;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + ' Campos'}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log('userInfo', userInfo);