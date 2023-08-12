import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchCommentsByArticleId, } from '@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
var commentsAdapter = createEntityAdapter({
    selectId: function (comment) { return comment.id; },
});
export var getArticleDetailsComments = commentsAdapter.getSelectors(function (state) { return state.articleDetailsComments || commentsAdapter.getInitialState(); });
var initialState = commentsAdapter.getInitialState({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
});
export var articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchCommentsByArticleId.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchCommentsByArticleId.fulfilled, function (state, action) {
            state.error = undefined;
            commentsAdapter.setAll(state, action.payload);
            state.isLoading = false;
        })
            .addCase(fetchCommentsByArticleId.rejected, function (state) {
            state.error = undefined;
            state.isLoading = true;
        });
    },
});
export var articleDetailsCommentsReducer = articleDetailsCommentsSlice.reducer;
