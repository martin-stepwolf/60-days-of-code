export {};
// <type> // Angle Bracket syntax
let username: any;
username = 'martin';
username = 'luis';

let message: string = (<string>username).length > 5 ?
                      `Welcome ${username}`:
                      'Username is too short';
console.log('message', message); 

let usernameWithId: any = 'martin 1';
username = (<string>usernameWithId).substring(0, 10);
console.log('Username only', username);

// Syntax "as"
message = (username as string).length > 5 ?
         `Welcome ${username}`:
         'Username is too short';

let helloUser: any;
helloUser = 'hello name';
username = (helloUser as string).substring(6);
console.log('username', username);

