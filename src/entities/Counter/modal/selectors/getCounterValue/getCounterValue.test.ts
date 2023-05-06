import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from 'entities/Counter/modal/selectors/getCounterValue/getCounterValue';

describe('getCounterValue', () => {
    test('return CounterValue', () => {
        const state:DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
