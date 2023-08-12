import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { userActions } from '@/entities/User/model/slices/userSlice';
import { IThunkConfig } from '@/app/providers/StoreProvider';

export interface ILoginByUsernameProps {
    username: string,
    password: string
}

export const loginByUsername = createAsyncThunk<
    IUser,
    ILoginByUsernameProps,
    IThunkConfig<string>
>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;
        try {
            const response = await extra.api.post<IUser>('/login', authData);
            // extra.navigate('/profile');
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
