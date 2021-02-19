import {sum, subtract, multiply, divide} from '../maths.js';

describe('Math calculations', ()=>{
    test('Test sum', ()=>{
        expect(sum(2,2)).toBe(4);
    });
    test('Test subtract', ()=>{
        expect(subtract(5,2)).toBe(3);
    });
    test('Test multiply', ()=>{
        expect(multiply(2,4)).toBe(8);
    });
    test('Test divide', ()=>{
        expect(divide(10,2)).toBe(5);
    });
});