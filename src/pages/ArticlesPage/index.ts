import { ArticlePageAsync } from './ui/ArticlePage/ArticlePage.async';

export {
    getArticlesPageType,
    getArticlesPageHasMore,
    getArticlesPageLimit,
    getArticlesPageNum,
} from './model/selectors/articlesPageSelectors';

export type { IArticlesPageSchema } from './model/types/articlesPageSchema';

export {
    ArticlePageAsync as ArticlePage,
};
