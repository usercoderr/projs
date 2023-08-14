import { ArticleDetailsPageAsync } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export { articleDetailsCommentsReducer } from './model/slices/articleDetailsCommentsSlice';
export {
    articleDetailsRecommendationsReducer,
} from './model/slices/articleDetailsRecommendationsSlice';

export {
    getArticleRecommendationsError,
    getArticleRecommendationsIsLoading,
} from './model/selectors/recommendations';

export type {
    IArticleDetailsRecommendationsSchema,
} from './model/types/IArticleDetailsRecommendationsSchema';

export { getArticleCommentsError, getArticleCommentsIsLoading } from './model/selectors/comments';

export type {
    IArticleDetailsCommentsSchema,
} from './model/types/IArticleDetailsCommentsSchema';

export { ArticleDetailsPageAsync as ArticleDetailsPage };
