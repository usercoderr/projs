import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from '@/app/providers/StoreProvider';
import { IArticle } from '@/entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
    IArticle[],
    void,
    IThunkConfig<string>
>('articlesDetailsPage/fetchArticleRecommendations', async (props, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<IArticle[]>('/articles', {
            params: {
                _limit: 8,
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
