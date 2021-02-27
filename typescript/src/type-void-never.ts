// Void

// Type explicit
function showInfo(user: any): any {
    console.log('User Info', user.id, user.username, user.firstName);
    // return 'hello';
}

showInfo({ id: 1, username: 'martinez', firstName: 'martin' });

// Type Infer
function showFormattedInfo(user: any) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}

showFormattedInfo({ id: 1, username: 'martinez', firstName: 'martin' });

// type void, as variable
let unusable: void;
// unusable = null;
unusable = undefined;

// Type: Never

function handleError(code: number, message: string): never {
    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}

try {
    handleError(404, 'Not Found');
} catch (error) {
}

function sumNumbers(limit: number): never {
    let sum = 0;
    while (true) {
        sum++;
    }
}

sumNumbers(10);
