import { ArticlePageAsync } from './ui/ArticlePage.async';

export {
    getArticlesPageHasMore,
    getArticlesPageLimit,
    getArticlesPageNum,
} from './model/selectors/articlesPageSelectors';

export { IArticlesPageSchema } from './model/types/articlesPageSchema';

export {
    ArticlePageAsync as ArticlePage,
};
