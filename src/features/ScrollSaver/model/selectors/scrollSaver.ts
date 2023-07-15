import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import path from 'path';

export const getScrollSaver = (state: StateSchema) => state.scrollSaver?.scroll;
export const getScrollByPath = createSelector(
    getScrollSaver,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
