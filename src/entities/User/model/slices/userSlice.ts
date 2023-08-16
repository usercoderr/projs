import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserSchema } from '../types/user';
import { IJsonSettings } from '../types/jsonSettings';
import { setFeatureFlags } from '@/shared/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { initAuthData } from '../services/initAuthData';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

const initialState: IUserSchema = {
    _mounted: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
            localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
        },
        logOut: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, { payload }: PayloadAction<IJsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = payload;
                }
            },
        );
        builder.addCase(
            initAuthData.fulfilled,
            (state, { payload }: PayloadAction<IUser>) => {
                state.authData = payload;
                setFeatureFlags(payload.features);
                state._mounted = true;
            },
        );
        builder.addCase(initAuthData.rejected, (state) => {
            state._mounted = true;
        });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
