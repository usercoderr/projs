import { IComment } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface IArticleDetailsCommentsSchema extends EntityState<IComment>{
    isLoading: boolean,
    error?: string,
    ids: string[],
    entities: Record<any, any>
}
