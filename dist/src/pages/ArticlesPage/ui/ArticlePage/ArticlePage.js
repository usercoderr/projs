var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { DynamicModalLoader, } from '@/shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page/Page';
import { ArticleInfiniteList } from '@/pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList';
import { ArticlePageFilter } from '../ArticlePageFilter/ArticlePageFilter';
import { fetchNextArticlesPage, } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageReducer, } from '../../model/slices/articlesPageSlice';
import cls from './ArticlePage.module.scss';
var reducer = {
    articlesPage: articlesPageReducer,
};
var ArticlePage = function (_a) {
    var className = _a.className;
    var t = useTranslation('article').t;
    var dispatch = useAppDispatch();
    var onLoadNextPart = useCallback(function () {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);
    return (_jsx(DynamicModalLoader, __assign({ reducers: reducer, removeAfterUnmount: false }, { children: _jsxs(Page, __assign({ onScrollEnd: onLoadNextPart, className: classNames(cls.ArticlePage, {}, [className]) }, { children: [_jsx(ArticlePageFilter, {}), _jsx(ArticleInfiniteList, { className: cls.list })] })) })));
};
export default memo(ArticlePage);
