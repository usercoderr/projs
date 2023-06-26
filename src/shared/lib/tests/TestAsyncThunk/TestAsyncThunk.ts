import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios/index';

type TActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) =>
    AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>
jest.mock('axios');

const mockedAxios: jest.MockedObjectDeep<typeof axios> = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    actionCreator: TActionCreatorType<Return, Arg, RejectedValue>;

    getState: () => StateSchema;

    api: jest.MockedObjectDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    constructor(actionCreator: TActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.navigate = jest.fn();
        this.api = mockedAxios;
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(
            this.dispatch,
            this.getState,
            {
                api: this.api,
                navigate: this.navigate,
            },
        );
        return result;
    }
}
