import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';
import { userActions } from '@/entities/User';

jest.mock('axios');
const mockedAxios: jest.MockedObjectDeep<typeof axios> = jest.mocked(axios, true);
describe('loginByUsername.test', () => {
    let dispatch : Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    // test('success', async () => {
    //     const userData = { username: 'admin', id: '1' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
    //     const action = loginByUsername({ username: 'admin', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toBe(userData);
    // });
    test('success Class', async () => {
        const userData = { username: 'admin', id: '1' };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
        const result = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(userData);
    });
    // test('error', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsername({ username: 'admin', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toBe('error ');
    // });
    test('error Class', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error ');
    });
});
