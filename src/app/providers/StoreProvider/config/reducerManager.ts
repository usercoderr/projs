import { AnyAction, combineReducers, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { IReducerManager, TStateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema';

export function createReducerManager(initialReducers:ReducersMapObject<StateSchema>)
    :IReducerManager {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);
    let keysToRemove:TStateSchemaKey[] = [];
    return {
        getReducerMap: () => reducers,
        reduce: (state:StateSchema, action:AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },
        add: (key, reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },
        remove: (key:TStateSchemaKey) => {
            if (!key || reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },

    };
}
