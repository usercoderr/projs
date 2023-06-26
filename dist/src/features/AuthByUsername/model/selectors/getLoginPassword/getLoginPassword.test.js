import { getLoginPassword } from './getLoginPassword';
describe('getLoginPassword', function () {
    test('should return state', function () {
        var state = {
            loginForm: {
                password: '1234',
            },
        };
        expect(getLoginPassword(state)).toEqual('1234');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginPassword(state)).toEqual('');
    });
});
