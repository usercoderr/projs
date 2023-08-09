import { createAsyncThunk } from '@reduxjs/toolkit';
import { IArticle } from 'entities/Article';
import { IThunkConfig } from 'app/providers/StoreProvider';

export const fetchArticleById = createAsyncThunk<
    IArticle,
    string | undefined,
    IThunkConfig<string>
>('articleDetails/fetchArticleById', async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
        const response = await extra.api.get<IArticle>(`/articles/${articleId}`, {
            params: {
                _expand: 'user',
            },
        });
        if (!articleId) {
            throw new Error('');
        }
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
