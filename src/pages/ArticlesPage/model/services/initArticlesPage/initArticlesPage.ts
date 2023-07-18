import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { TSortOrder } from 'shared/types';
import { EArticleSortField } from 'entities/Article';
import { getArticlesPageInit } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    IThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const {
            getState,
            dispatch,
        } = thunkAPI;

        const init = getArticlesPageInit(getState());
        if (!init) {
            const orderFromUrl = searchParams.get('order') as TSortOrder;
            const sortFromUrl = searchParams.get('sort') as EArticleSortField;
            const searchFromUrl = searchParams.get('search');
            if (orderFromUrl) {
                dispatch(articlesPageActions.setOrder(orderFromUrl));
            }
            if (sortFromUrl) {
                dispatch(articlesPageActions.setSort(sortFromUrl));
            }
            if (searchFromUrl) {
                dispatch(articlesPageActions.setSearch(searchFromUrl));
            }
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
