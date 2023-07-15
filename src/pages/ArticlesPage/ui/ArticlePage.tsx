import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { ArticleViewSelector, EArticleView } from 'entities/Article';
import {
    DynamicModalLoader, TReducerList,
} from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import {
    fetchNextArticlesPage,
} from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    getArticlesPageError,
    getArticlesPageHasMore,
    getArticlesPageInit,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from '../model/slices/articlesPageSlice';
import cls from './ArticlePage.module.scss';

interface IArticlePageProps{
    className?: string
}
const reducer:TReducerList = {
    articlesPage: articlesPageReducer,
};
const ArticlePage = ({ className }: IArticlePageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback((view: EArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useEffect(() => {
        dispatch(initArticlesPage());
    }, [dispatch]);

    return (
        <DynamicModalLoader
            reducers={reducer}
            removeAfterUnmount={false}
        >
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <ArticleViewSelector
                    onViewClick={onChangeView}
                    view={view}
                />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModalLoader>
    );
};
export default memo(ArticlePage);
