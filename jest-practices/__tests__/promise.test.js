import { getDataFromApi } from '../promise';

describe('Test promises', () => {
    test('Commit a request to an API', done => {
        const api = 'https://rickandmortyapi.com/api/character/';
        getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
            done();
        });
    });

    test('Test a hello', () => {
        return expect(Promise.resolve('hello!')).resolves.toBe('hello!');
    });

    test('Reject with error', () => {
        return expect(Promise.reject('Errror')).rejects.toBe('Errror');
    });

});
