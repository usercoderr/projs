import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getArticles } from '@/pages/ArticlesPage/model/slices/articlesPageSlice';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView, } from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList';
import { Text } from '@/shared/ui/Text/Text';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
export var ArticleInfiniteList = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var searchParams = useSearchParams()[0];
    var dispatch = useAppDispatch();
    var articles = useSelector(getArticles.selectAll);
    var isLoading = useSelector(getArticlesPageIsLoading);
    var error = useSelector(getArticlesPageError);
    var view = useSelector(getArticlesPageView);
    useEffect(function () {
        dispatch(initArticlesPage(searchParams));
    }, [dispatch, searchParams]);
    if (error) {
        return _jsx(Text, { text: t('Error') });
    }
    return (_jsx(ArticleList, { isLoading: isLoading, view: view, articles: articles, className: className }));
});
