import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
export function createReduxStore(initialState) {
    return configureStore({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
