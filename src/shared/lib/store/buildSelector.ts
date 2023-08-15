import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

type TSelector<T, Args extends any[]> = (state:StateSchema, ...arg: Args) => T
type THook<T, Args extends any[]> = (...arg:Args) => T
type TResult<T, Args extends any[]> = [THook<T, Args>, TSelector<T, Args>]

export function buildSelector<T, Args extends any[]>(selector:TSelector<T, Args>):TResult<T, Args> {
    const useSelectorHook: THook<T, Args> = (...arg:Args) => useSelector((state: StateSchema) => selector(state, ...arg));
    return [useSelectorHook, selector];
}
