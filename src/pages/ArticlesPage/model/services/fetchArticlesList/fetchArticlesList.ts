import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from '@/app/providers/StoreProvider';
import { EArticleType, IArticle } from '@/entities/Article';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageType,

    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort, 
} from '../../selectors/articlesPageSelectors';
import { addQueryParams } from '@/shared/url/addQueryParams/addQueryParams';

interface IFetchArticlesListProps{
    replace?: boolean
}
export const fetchArticlesList = createAsyncThunk<
    IArticle[],
    IFetchArticlesListProps,
    IThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const limit = getArticlesPageLimit(getState());
    const sort = getArticlesPageSort(getState());
    const order = getArticlesPageOrder(getState());
    const search = getArticlesPageSearch(getState());
    const page = getArticlesPageNum(getState());
    const type = getArticlesPageType(getState());
    try {
        addQueryParams({
            sort, order, search, type,
        });
        const response = await extra.api.get<IArticle[]>('/articles', {
            params: {
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                _expand: 'user',
                q: search,
                type: type === EArticleType.ALL ? undefined : type,
            },
        });
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
