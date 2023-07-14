import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { EArticleView, IArticle } from 'entities/Article';
import { IArticlesPageSchema } from 'pages/ArticlesPage';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import {
    fetchArticlesList,
} from '../services/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
});
export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);
const initialState = articlesAdapter.getInitialState<IArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    view: EArticleView.SMALL,
    entities: { },
});
export const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<EArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as EArticleView;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticlesList.fulfilled,
                (state, action:PayloadAction<IArticle[]>) => {
                    state.error = undefined;
                    articlesAdapter.setAll(state, action.payload);
                    state.isLoading = false;
                },
            )
            .addCase(fetchArticlesList.rejected, (state) => {
                state.error = undefined;
                state.isLoading = true;
            });
    },

});
export const {
    reducer: articlesPageReducer,
    actions: articlesPageActions,
} = articlesPageSlice;
