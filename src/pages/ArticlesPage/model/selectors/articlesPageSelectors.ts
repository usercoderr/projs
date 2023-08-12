import { StateSchema } from '@/app/providers/StoreProvider';
import { EArticleSortField, EArticleType, EArticleView } from '@/entities/Article';

export const getArticlesPageIsLoading = (
    state: StateSchema,
) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageInit = (state: StateSchema) => state.articlesPage?._init;
export const getArticlesPageSort = (
    state: StateSchema,
) => state.articlesPage?.sort ?? EArticleSortField.CREATED;
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
export const getArticlesPageType = (
    state: StateSchema,
) => state.articlesPage?.type ?? EArticleType.ALL;
export const getArticlesPageView = (
    state: StateSchema,
) => state.articlesPage?.view || EArticleView.SMALL;
