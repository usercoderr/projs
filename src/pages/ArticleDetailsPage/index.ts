import { ArticleDetailsPageAsync } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export {
    getArticleRecommendationsError,
    getArticleRecommendationsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/recommendations';

export type {
    IArticleDetailsRecommendationsSchema,
} from './model/types/IArticleDetailsRecommendationsSchema';

export { getArticleCommentsError, getArticleCommentsIsLoading } from './model/selectors/comments';

export type {
    IArticleDetailsCommentsSchema,
} from './model/types/IArticleDetailsCommentsSchema';

export { ArticleDetailsPageAsync as ArticleDetailsPage };
