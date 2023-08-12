import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '@/entities/Counter/modal/selectors/getCounter/getCounter';
import { CounterSchema } from '@/entities/Counter';

export const getCounterValue = createSelector(getCounter, (counter:CounterSchema) => counter.value);
