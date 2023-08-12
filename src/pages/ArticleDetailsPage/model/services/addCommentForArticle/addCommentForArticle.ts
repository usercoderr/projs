import { createAsyncThunk } from '@reduxjs/toolkit';
import { IComment } from '@/entities/Comment';
import { IThunkConfig } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '@/entities/User';
import { addCommentFormActions, getAddCommentFormText } from '@/features/AddCommentForm';
import { getArticleDetailsData } from '@/entities/Article';
import {
    fetchCommentsByArticleId,
} from '@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    IComment,
    void,
    IThunkConfig<string>
>(
    'articleDetails/addCommentForArticle',
    async (authData, thunkApi) => {
        const {
            extra, rejectWithValue, dispatch, getState,
        } = thunkApi;
        const userData = getUserAuthData(getState());
        const text = getAddCommentFormText(getState());
        const article = getArticleDetailsData(getState());
        if (!userData || !text || !article) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.post<IComment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }
            dispatch(addCommentFormActions.setText(''));
            dispatch(fetchCommentsByArticleId(article.id));
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
