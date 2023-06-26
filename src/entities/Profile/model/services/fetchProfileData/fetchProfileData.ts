import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { IProfile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<
    IProfile,
    void,
    IThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<IProfile>('/profile');
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
