import { EntityState } from '@reduxjs/toolkit';
import {
    EArticleSortField,
    EArticleType,
    EArticleView,
    IArticle,
} from '@/entities/Article';
import { TSortOrder } from '@/shared/types';

export interface IArticlesPageSchema extends EntityState<IArticle>{
    isLoading?: boolean,
    error?: string,

    // pagination
    page: number,
    limit: number,
    hasMore: boolean,
    _init: boolean

    // filter
    order: TSortOrder
    sort:EArticleSortField,
    search: string,
    view?: EArticleView,
    type: EArticleType
}
