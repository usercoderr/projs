import { loginReducer } from 'features/AuthByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
describe('loginSlice.test', function () {
    test('test set username', function () {
        var state = { username: 'admin' };
        expect(loginReducer(state, loginActions.setUsername('admin'))).toBe({ username: 'admin' });
    });
    test('test set password', function () {
        var state = { password: '123' };
        expect(loginReducer(state, loginActions.setPassword('123'))).toBe({ password: '123' });
    });
});
