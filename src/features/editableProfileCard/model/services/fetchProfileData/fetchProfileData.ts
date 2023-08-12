import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { IProfile } from '@/entities/Profile';

export const fetchProfileData = createAsyncThunk<
    IProfile,
    string,
    IThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<IProfile>(`/profile/${profileId}`);
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
