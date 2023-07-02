export {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './model/selectors/articleDetails';
export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById';

export {
    articleDetailsActions,
    articleDetailsReducer,
} from './model/slice/articleDetailsSlice';

export { IArticleDetailSchema } from './model/types/articleDetailSchema';
export { IArticle, IArticleBlock, EArticleBlockType } from './model/types/article';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
