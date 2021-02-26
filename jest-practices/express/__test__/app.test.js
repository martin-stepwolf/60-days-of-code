const request = require('supertest');
const app = require('../app');

describe('Test Express App', () => {
    test('Test the response get with 200', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});