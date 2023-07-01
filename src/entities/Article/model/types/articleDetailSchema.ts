import { IArticle } from './article';

export interface IArticleDetailSchema {
    isLoading: boolean,
    error?: string,
    data?: IArticle
}
