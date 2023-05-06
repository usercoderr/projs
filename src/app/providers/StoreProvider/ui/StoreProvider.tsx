import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { createReduxStore } from '../config/store';

interface IStoreProviderProps {
    children?: ReactNode;
    initialState?:DeepPartial<StateSchema>
}

export const StoreProvider = (props: IStoreProviderProps) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
