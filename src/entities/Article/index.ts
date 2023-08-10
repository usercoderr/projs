export { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs';

export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';

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

export type{ IArticleDetailSchema } from './model/types/articleDetailSchema';
export type { IArticle, IArticleBlock } from './model/types/article';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export {
    EArticleView,
    EArticleBlockType,
    EArticleType,
    EArticleSortField,
} from './model/consts/consts';
