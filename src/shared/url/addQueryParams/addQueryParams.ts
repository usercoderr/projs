// eslint-disable-next-line no-undef
export function getQueryParams(params: OptionalRecord<string, string>) {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });
    return `?${searchParams.toString()}`;
}
// eslint-disable-next-line no-undef
export function addQueryParams(params: OptionalRecord<string, string>) {
    // @ts-ignore
    window.history.pushState(null, '', getQueryParams(params));
}
