// eslint-disable-next-line no-undef
export function getQueryParams(params) {
    var searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(function (_a) {
        var name = _a[0], value = _a[1];
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });
    return "?".concat(searchParams.toString());
}
// eslint-disable-next-line no-undef
export function addQueryParams(params) {
    // @ts-ignore
    window.history.pushState(null, '', getQueryParams(params));
}
