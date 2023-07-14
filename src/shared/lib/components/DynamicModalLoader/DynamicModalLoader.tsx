import { FC, useEffect } from 'react';
import {
    IReduxStoreWithManager,
    TStateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

type TReducerListEntry = [TStateSchemaKey, Reducer]

export type TReducerList = {
    [name in TStateSchemaKey]?: Reducer;
}
interface IDynamicModalLoaderProps{
    reducers: TReducerList,
    removeAfterUnmount?:boolean
}
export const DynamicModalLoader :FC<IDynamicModalLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;
    const store = useStore() as IReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]:TReducerListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]:TReducerListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
    return (
        // eslint-disable-next-line
        <>
            {children}
        </>
    );
};
