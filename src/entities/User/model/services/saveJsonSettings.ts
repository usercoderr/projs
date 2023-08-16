import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    getJsonSettings,
} from '../selectors/jsonSettings';
import { IThunkConfig } from '@/app/providers/StoreProvider';
import { IJsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData';
import { setUserApiMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
  IJsonSettings,
  IJsonSettings,
  IThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkApi) => {
    const {
        dispatch,
        rejectWithValue,
        getState,
    } = thunkApi;
    const userData = getUserAuthData(getState());
    const currentSettings = getJsonSettings(getState());

    if (!userData) {
        rejectWithValue('');
    }

    try {
        const response = await dispatch(setUserApiMutation({
            userId: userData.id,
            jsonSettings: {
                ...currentSettings,
                ...newJsonSettings,

            },
        })).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue('');
        }
        return response.jsonSettings;
    } catch (e) {
        return rejectWithValue('');
    }
});
