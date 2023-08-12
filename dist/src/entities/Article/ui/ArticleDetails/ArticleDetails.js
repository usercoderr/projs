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
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModalLoader, } from '@/shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ETextAlign, ETextSize, Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Icon } from '@/shared/ui/Icon/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import EyeIcon from '../../../../shared/assets/icons/view.svg';
import CalendarIcon from '../../../../shared/assets/icons/calendar.svg';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading, } from '../../model/selectors/articleDetails';
import { EArticleBlockType } from '../../model/consts/consts';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent, } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
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
                return (_jsx(ArticleCodeBlockComponent, { block: block, className: cls.block }, block.id));
            case EArticleBlockType.IMAGE:
                return (_jsx(ArticleImageBlockComponent, { block: block, className: cls.block }, block.id));
            case EArticleBlockType.TEXT:
                return (_jsx(ArticleTextBlockComponent, { className: cls.block, block: block }, block.id));
            default:
                return null;
        }
    }, []);
    var content;
    if (isLoading) {
        content = (_jsxs(_Fragment, { children: [_jsx(Skeleton, { className: cls.avatar, width: 200, border: 100, height: 200 }), _jsx(Skeleton, { className: cls.title, width: 300, height: 50 }), _jsx(Skeleton, { className: cls.skeleton, width: 300, height: 50 }), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 100 })] }));
    }
    else if (error) {
        content = (_jsx(Text, { align: ETextAlign.CENTER, title: t('sorry') }));
    }
    else {
        content = (_jsxs(_Fragment, { children: [_jsx(HStack, __assign({ gap: "8", max: true, justify: "center" }, { children: _jsx(Avatar, { size: 200, src: article === null || article === void 0 ? void 0 : article.img }) })), _jsx(Text, { title: article === null || article === void 0 ? void 0 : article.title, text: article === null || article === void 0 ? void 0 : article.subtitle, size: ETextSize.L }), _jsxs(HStack, __assign({ gap: "8" }, { children: [_jsx(Icon, { Svg: EyeIcon }), _jsx(Text, { text: String(article === null || article === void 0 ? void 0 : article.views) })] })), _jsxs("div", __assign({ className: cls.articleInfo }, { children: [_jsx(Icon, { className: cls.icons, Svg: CalendarIcon }), _jsx(Text, { text: article === null || article === void 0 ? void 0 : article.createdAt })] })), article === null || article === void 0 ? void 0 : article.blocks.map(renderBlock)] }));
    }
    useEffect(function () {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);
    return (_jsx(DynamicModalLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsx(VStack, __assign({ gap: "16", max: true, className: classNames(cls.ArticleDetails, {}, [className]) }, { children: content })) })));
};
