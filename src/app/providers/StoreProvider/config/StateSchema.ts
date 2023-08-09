import { CounterSchema } from 'entities/Counter';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { IArticleDetailSchema } from 'entities/Article';
import {
    IArticleDetailsCommentsSchema,
    IArticleDetailsRecommendationsSchema,
} from 'pages/ArticleDetailsPage';
import { IAddCommentFormSchema } from 'features/AddCommentForm';
import { IArticlesPageSchema } from 'pages/ArticlesPage';
import { IScrollSaverSchema } from 'features/ScrollSaver';
import { rtkApi } from 'shared/api/rtkApi';
import { IProfileSchema } from 'features/editableProfileCard';

export interface StateSchema{
    counter: CounterSchema;
    user: IUserSchema
    scrollSaver: IScrollSaverSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    loginForm?: ILoginSchema,
    profile?: IProfileSchema,
    articleDetails?:IArticleDetailSchema
    articleDetailsComments?:IArticleDetailsCommentsSchema
    articleDetailsRecommendations?:IArticleDetailsRecommendationsSchema
    addCommentForm?:IAddCommentFormSchema,
    articlesPage?: IArticlesPageSchema,
}

export type TStateSchemaKey = keyof StateSchema;
export interface IReducerManager{
    getReducerMap:() => ReducersMapObject<StateSchema>
    reduce:(state:StateSchema, action:AnyAction) => CombinedState<StateSchema>
    add:(key:TStateSchemaKey, reducer:Reducer) =>void
    remove:(key:TStateSchemaKey) => void,
}

export interface IReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: IReducerManager
}

export interface IThunkExtraArg{
    api: AxiosInstance,
}
export interface IThunkConfig<T>{
    rejectValue: T,
    extra: IThunkExtraArg,
    state: StateSchema
}
