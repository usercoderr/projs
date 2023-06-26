import { getLoginError } from './getLoginError';
describe('getLoginError', function () {
    test('should return error', function () {
        var state = {
            loginForm: {
                error: 'error',
                username: 'admin',
                password: '232',
                isLoading: true,
            },
        };
        expect(getLoginError(state)).toEqual('error');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginError(state)).toEqual(undefined);
    });
});
