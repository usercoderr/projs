import { counterReducer } from '@/entities/Counter';
import { counterActions } from '@/entities/Counter/modal/slices/counterSlice';
describe('counterSlice', function () {
    test('if state = undefined', function () {
        var state = {
            value: 10,
        };
        expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 });
    });
    test('increment', function () {
        var state = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('decrement', function () {
        var state = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
});
