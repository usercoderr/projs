import { getCounterValue } from 'entities/Counter/modal/selectors/getCounterValue/getCounterValue';
describe('getCounterValue', function () {
    test('return CounterValue', function () {
        var state = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state)).toEqual(10);
    });
});
