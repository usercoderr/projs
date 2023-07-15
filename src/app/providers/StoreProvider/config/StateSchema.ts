import { CounterSchema } from 'entities/Counter';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { IProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { IArticleDetailSchema } from 'entities/Article';
import { IArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { IAddCommentFormSchema } from 'features/AddCommentForm';
import { IArticlesPageSchema } from 'pages/ArticlesPage';
import { IScrollSaverSchema } from 'features/ScrollSaver';

export interface StateSchema{
    counter: CounterSchema;
    user: IUserSchema
    scrollSaver: IScrollSaverSchema

    loginForm?: ILoginSchema,
    profile?: IProfileSchema,
    articleDetails?:IArticleDetailSchema
    articleDetailsComments?:IArticleDetailsCommentsSchema
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
