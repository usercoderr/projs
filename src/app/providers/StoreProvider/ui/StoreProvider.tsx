import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { useNavigate } from 'react-router';
import { createReduxStore } from '../config/store';

interface IStoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: IStoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
