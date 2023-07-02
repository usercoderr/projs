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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModalLoader, } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { articleDetailsReducer, EArticleBlockType, fetchArticleById, getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading, } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ETextAlign, ETextSize, Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleCodeBlockComponent, } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent, } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent, } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import EyeIcon from '../../../../shared/assets/icons/view.svg';
import CalendarIcon from '../../../../shared/assets/icons/calendar.svg';
import cls from './ArticleDetails.module.scss';
var reducers = {
    articleDetails: articleDetailsReducer,
};
export var ArticleDetails = function (_a) {
    var className = _a.className, id = _a.id;
    var t = useTranslation('articleDetails').t;
    var dispatch = useAppDispatch();
    var isLoading = useSelector(getArticleDetailsIsLoading);
    var error = useSelector(getArticleDetailsError);
    var article = useSelector(getArticleDetailsData);
    var renderBlock = useCallback(function (block) {
        switch (block.type) {
            case EArticleBlockType.CODE:
                return _jsx(ArticleCodeBlockComponent, { block: block, className: cls.block }, block.id);
            case EArticleBlockType.IMAGE:
                return _jsx(ArticleImageBlockComponent, { block: block, className: cls.block }, block.id);
            case EArticleBlockType.TEXT:
                return _jsx(ArticleTextBlockComponent, { className: cls.block, block: block }, block.id);
            default:
                return null;
        }
    }, []);
    var content;
    if (isLoading) {
        content = (_jsxs(_Fragment, { children: [_jsx(Skeleton, { className: cls.avatar, width: 200, border: 100, height: 200 }, void 0), _jsx(Skeleton, { className: cls.title, width: 300, height: 50 }, void 0), _jsx(Skeleton, { className: cls.skeleton, width: 300, height: 50 }, void 0), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 100 }, void 0)] }, void 0));
    }
    else if (error) {
        content = (_jsx(Text, { align: ETextAlign.CENTER, title: t('sorry') }, void 0));
    }
    else {
        content = (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: cls.avatarWrapper }, { children: _jsx(Avatar, { size: 200, src: article === null || article === void 0 ? void 0 : article.img, className: cls.avatar }, void 0) }), void 0), _jsx(Text, { className: cls.title, title: article === null || article === void 0 ? void 0 : article.title, text: article === null || article === void 0 ? void 0 : article.subtitle, size: ETextSize.L }, void 0), _jsxs("div", __assign({ className: cls.articleInfo }, { children: [_jsx(Icon, { className: cls.icons, Svg: EyeIcon }, void 0), _jsx(Text, { text: String(article === null || article === void 0 ? void 0 : article.views) }, void 0)] }), void 0), _jsxs("div", __assign({ className: cls.articleInfo }, { children: [_jsx(Icon, { className: cls.icons, Svg: CalendarIcon }, void 0), _jsx(Text, { text: article === null || article === void 0 ? void 0 : article.createdAt }, void 0)] }), void 0), article === null || article === void 0 ? void 0 : article.blocks.map(renderBlock)] }, void 0));
    }
    useEffect(function () {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);
    return (_jsx(DynamicModalLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsx("div", __assign({ className: classNames(cls.ArticleDetails, {}, [className]) }, { children: content }), void 0) }), void 0));
};
