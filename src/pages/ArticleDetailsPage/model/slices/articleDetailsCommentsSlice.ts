import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { IArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id,
});
export const getArticleDetailsComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);
const initialState = commentsAdapter.getInitialState<IArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: { },
});
export const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action:PayloadAction<IComment[]>) => {
                    state.error = undefined;
                    commentsAdapter.setAll(state, action.payload);
                    state.isLoading = false;
                },
            )
            .addCase(fetchCommentsByArticleId.rejected, (state) => {
                state.error = undefined;
                state.isLoading = true;
            });
    },
});
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
