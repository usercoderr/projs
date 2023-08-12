import { getQueryParams } from './addQueryParams';
describe('shared/url/addQueryParams', function () {
    test('one param', function () {
        var params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('two params', function () {
        var params = getQueryParams({
            test: 'value',
            second: '2',
        });
        expect(params).toBe('?test=value&second=2');
    });
    test('with undefined', function () {
        var params = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
