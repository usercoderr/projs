export { ArticleListItemSkeleton } from '@/entities/Article/ui/ArticleListItemSkeleton/ArticleListItemSkeleton';

export { ArticleList } from './ui/ArticleList/ArticleList';
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
export type { IArticle, IArticleBlock, IArticleTextBlock } from './model/types/article';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export {
    EArticleView,
    EArticleBlockType,
    EArticleType,
    EArticleSortField,
} from './model/consts/consts';
