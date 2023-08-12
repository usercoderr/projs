import path from 'path';
import { StateSchema } from '@/app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollSaver = (state: StateSchema) => state.scrollSaver?.scroll;
export const getScrollByPath = createSelector(
    getScrollSaver,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
