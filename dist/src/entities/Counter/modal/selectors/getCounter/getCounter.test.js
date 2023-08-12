import { getCounter } from '@/entities/Counter/modal/selectors/getCounter/getCounter';
describe('getCounter', function () {
    test('returnCounter', function () {
        var state = {
            counter: {
                value: 10,
            },
        };
        expect(getCounter(state)).toEqual({ value: 10 });
    });
});
