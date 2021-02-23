import { getDataFromApi } from '../promise';

describe('Test Async/Await', () => {
    test('Commit a request to an API', async () => {
        const api = 'https://rickandmortyapi.com/api/character/';
        const getRick = 'https://rickandmortyapi.com/api/character/1'
        await getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
        });
        await getDataFromApi(getRick).then(data => {
            expect(data.name).toEqual('Rick Sanchez');
        });
    });

    test('Commit a request to an API with error', async () => {
        const apiError = 'http://httpstat.us/500';
        const peticion = getDataFromApi(apiError);
        await expect(peticion).rejects.toEqual(Error('Request failed with status code 500'));
    });

    test('Test a hello', async () => {
        await expect(Promise.resolve('hello')).resolves.toBe('hello');
        await expect(Promise.reject(new Error('Error'))).rejects.toThrow('Error')
    });

}); 