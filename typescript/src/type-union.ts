export {};

// // 10, '10'
// let idUser: number | string;
// idUser = 10;
// idUser = '10';

// function getUsernameById(id: number | string) {
//     return 'martin';
// }

// getUsernameById(20);
// getUsernameById('20');

// Alias in Types: TS
type IdUser = number | string;
type Username = string;
let idUser: IdUser;
idUser = 10;
idUser = '10';

function getUsernameById(id: IdUser): Username {
    return 'martin';
}

getUsernameById(20);
getUsernameById('20');

// Literal types
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
// let smallPicture: SquareSize = '200x200'; //Error
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';
