import { ArticlePageAsync } from './ui/ArticlePage/ArticlePage.async';

export { fetchArticlesList } from '../ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';

export { articlesPageActions } from '../ArticlesPage/model/slices/articlesPageSlice';
export { getArticlesPageSearch, getArticlesPageSort } from '../ArticlesPage/model/selectors/articlesPageSelectors';
export { getArticlesPageOrder } from '../ArticlesPage/model/selectors/articlesPageSelectors';

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
