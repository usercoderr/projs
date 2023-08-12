import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return error', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
                username: 'admin',
                password: '232',
                isLoading: true,
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {
        };
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
