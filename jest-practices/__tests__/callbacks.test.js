import { callbackHell } from '../callbacks';

describe('Test a Callback', () => {
    test('Callback', done => {
        function otherCallback(data) {
            expect(data).toBe('Hi I am a callback')
            done();
        };
        callbackHell(otherCallback);
    });
});
