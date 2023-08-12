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
import { memo } from 'react';
import { EArticleView } from '@/entities/Article';
import { ETextSize, Text } from '@/shared/ui/Text/Text';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
var getSkeletons = function (view) { return new Array(view === EArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map(function (item, index) { return (_jsx(ArticleListItemSkeleton, { className: cls.card, view: view }, index)); }); };
export var ArticleList = memo(function (props) {
    var t = useTranslation().t;
    var className = props.className, articles = props.articles, _a = props.view, view = _a === void 0 ? EArticleView.SMALL : _a, isLoading = props.isLoading, _b = props.virtualized, virtualized = _b === void 0 ? true : _b;
    var renderArticle = function (article) { return (_jsx(ArticleListItem, { article: article, view: view, className: cls.card }, article.id)); };
    if (!isLoading && !articles.length) {
        return (_jsx("div", __assign({ className: classNames(cls.ArticleList, {}, [className, cls[view]]) }, { children: _jsx(Text, { size: ETextSize.L, title: t('Empty') }) })));
    }
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleList, {}, [className, cls[view]]) }, { children: [articles.length > 0 ? articles.map(renderArticle) : null, isLoading && getSkeletons(view)] })));
});
