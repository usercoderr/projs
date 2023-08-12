import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchArticleRecommendations, } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
var recommendationsAdapter = createEntityAdapter({
    selectId: function (article) { return article.id; },
});
export var getArticleDetailsRecommendations = recommendationsAdapter.getSelectors(function (state) { return state.articleDetailsRecommendations || recommendationsAdapter.getInitialState(); });
var initialState = recommendationsAdapter.getInitialState({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
});
export var articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticleRecommendations.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchArticleRecommendations.fulfilled, function (state, action) {
            recommendationsAdapter.setAll(state, action.payload);
            state.isLoading = false;
        })
            .addCase(fetchArticleRecommendations.rejected, function (state) {
            state.error = undefined;
            state.isLoading = true;
        });
    },
});
export var articleDetailsRecommendationsReducer = articleDetailsRecommendationsSlice.reducer;
