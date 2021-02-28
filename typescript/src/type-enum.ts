// Photography
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panoramic = 3;

enum PhotoOrientation {
    Landscape = 0, // 0
    Portrait = 1, // 1
    Square = 2, // 2
    Panorama = 3 // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('Landscape', PhotoOrientation[landscape]);

enum PictureOrientation {
    Landscape = 10, // 10
    Portrait, // 11
    Square, // 12
    Panorama // 13
}
console.log('portrait', PictureOrientation.Portrait);

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp'
}

const country: Country = Country.Colombia;
console.log('country', country);

enum WeekDays {
    Lunes = 'MON',
    Martes = 'TUE',
    Miercoles = 'WED',
    Jueves = 'THU',
    Viernes = 'FRI'
  }
  
  enum DiasFinSemana {
    Sabado = 'SAT',
    Domingo = 'SUN'
  }
  
  const Semana = {
    ...WeekDays,
    ...DiasFinSemana
  }
  
  console.log(Semana.Lunes); // MON
  console.log(Semana.Sabado); // SAT


  enum FirstEnum {
    value1 = 'value1',
    value2 = 'value2'
}

enum SecondEnum {
    value3 = 'value3',
    value4 = 'value4'
}

let testEnum = Object.assign({}, FirstEnum, SecondEnum);

console.log(testEnum.value4) // value 4

enum Color {
    Red,
    Green,
    Blue
}

enum Color {
    DarkRed = 3,
    DarkGreen,
    DarkBlue
}
