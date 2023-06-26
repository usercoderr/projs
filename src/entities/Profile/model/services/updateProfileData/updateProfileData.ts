import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfileForm, IProfile } from 'entities/Profile';
import { IThunkConfig } from 'app/providers/StoreProvider';

export const updateProfileData = createAsyncThunk<
    IProfile,
    void,
    IThunkConfig<string>
>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const formData = getProfileForm(getState());

        try {
            const response = await extra.api.put<IProfile>('/profile', formData);
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
