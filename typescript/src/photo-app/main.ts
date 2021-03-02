import {User, Album, Picture, PhotoOrientation} from './photo-app';

const user = new User(1, 'martin', 'Luis', true);
const album = new Album(10, 'Picture');
const picture = new Picture(1, 'TypeScript', '2020-03', PhotoOrientation.Landscape);

// We create the relations
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);
