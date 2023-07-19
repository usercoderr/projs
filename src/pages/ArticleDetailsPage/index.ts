import { ArticleDetailsPageAsync } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export {
    getArticleRecommendationsError,
    getArticleRecommendationsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/recommendations';

export {
    IArticleDetailsRecommendationsSchema,
} from './model/types/IArticleDetailsRecommendationsSchema';

export { getArticleCommentsError, getArticleCommentsIsLoading } from './model/selectors/comments';

export {
    IArticleDetailsCommentsSchema,
} from './model/types/IArticleDetailsCommentsSchema';

export { ArticleDetailsPageAsync as ArticleDetailsPage };
