import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

type TSelector<T> = (state:StateSchema) => T
type TResult<T> = [() => T, TSelector<T>]

export function buildSelector<T>(selector:TSelector<T>):TResult<T> {
    const useSelectorHook = () => useSelector(selector);
    return [useSelectorHook, selector];
}
