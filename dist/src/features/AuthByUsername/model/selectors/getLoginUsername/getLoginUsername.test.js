import { getLoginUsername } from './getLoginUsername';
describe('getLoginUsername', function () {
    test('should return state', function () {
        var state = {
            loginForm: {
                username: 'admin',
            },
        };
        expect(getLoginUsername(state)).toEqual('admin');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginUsername(state)).toEqual('');
    });
});
