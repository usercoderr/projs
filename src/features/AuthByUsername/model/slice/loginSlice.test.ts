import { DeepPartial } from '@reduxjs/toolkit';
import { ILoginSchema, loginReducer } from 'features/AuthByUsername';
import { loginActions, loginSlice } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<ILoginSchema> = { username: 'admin' };
        expect(loginReducer(
            state as ILoginSchema,
            loginActions.setUsername('admin'),
        )).toBe({ username: 'admin' });
    });
    test('test set password', () => {
        const state: DeepPartial<ILoginSchema> = { password: '123' };
        expect(loginReducer(
            state as ILoginSchema,
            loginActions.setPassword('123'),
        )).toBe({ password: '123' });
    });
});
