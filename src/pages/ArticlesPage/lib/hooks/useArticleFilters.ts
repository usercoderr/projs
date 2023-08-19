import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { EArticleSortField, EArticleType, EArticleView } from '@/entities/Article';
import { TSortOrder } from '@/shared/types';
import {
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort, getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';

export function useArticleFilters() {
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);
    const onChangeView = useCallback((view: EArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);
    const onChangeOrder = useCallback((newOrder: TSortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);
    const onChangeSort = useCallback((newSort: EArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeTab = useCallback((value: EArticleType) => {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return {
        view,
        sort,
        order,
        search,
        type,
        onChangeView,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeTab,
    };
}
