import { counterReducer, CounterSchema } from 'entities/Counter';
import { counterActions } from 'entities/Counter/modal/slice/counterSlice';

describe('counterSlice', () => {
    test('if state = undefined', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 });
    });
    test('increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });

});
