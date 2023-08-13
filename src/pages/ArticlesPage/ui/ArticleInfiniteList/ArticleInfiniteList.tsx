import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getArticles } from '@/pages/ArticlesPage/model/slices/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList';
import { Text } from '@/shared/ui/Text/Text';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

interface IArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = memo(({ className }: IArticleInfiniteListProps) => {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    useEffect(() => {
        dispatch(initArticlesPage(searchParams));
    }, [dispatch, searchParams]);
    if (error) {
        return <Text text={t('Error')} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});
