import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';
import {
    IArticleDetailsRecommendationsSchema,
} from 'pages/ArticleDetailsPage';
import {
    fetchArticleRecommendations,
} from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
});
export const getArticleDetailsRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsRecommendations || recommendationsAdapter.getInitialState(),
);
const initialState = recommendationsAdapter.getInitialState<IArticleDetailsRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: { },
});
export const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticleRecommendations.fulfilled,
                (state, action) => {
                    recommendationsAdapter.setAll(state, action.payload);
                    state.isLoading = false;
                },
            )
            .addCase(fetchArticleRecommendations.rejected, (state) => {
                state.error = undefined;
                state.isLoading = true;
            });
    },
});
export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice;
