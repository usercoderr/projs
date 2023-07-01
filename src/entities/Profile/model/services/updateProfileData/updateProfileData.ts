import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfileForm, IProfile } from 'entities/Profile';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { EValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from '../validateProfile/validateProfileData';

export const updateProfileData = createAsyncThunk<
    IProfile,
    void,
    IThunkConfig<EValidateProfileError[]>
>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const formData = getProfileForm(getState());
        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }
        try {
            const response = await extra.api.put<IProfile>('/profile', formData);
            return response.data;
        } catch (e) {
            return rejectWithValue([EValidateProfileError.SERVER_ERROR]);
        }
    },
);
