import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from 'entities/Counter/modal/selectors/getCounter/getCounter';
export var getCounterValue = createSelector(getCounter, function (counter) { return counter.value; });
