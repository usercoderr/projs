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
import { memo, Suspense, useCallback, useEffect, } from 'react';
import { useSelector } from 'react-redux';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '@/pages/ArticleDetailsPage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ETextSize, Text } from '@/shared/ui/Text/Text';
import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import { fetchCommentsByArticleId, } from '@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { VStack } from '@/shared/ui/Stack';
import { Loader } from '@/shared/ui/Loader/Loader';
import { getArticleDetailsComments, } from '../../model/slices/articleDetailsCommentsSlice';
import { addCommentForArticle, } from '../../model/services/addCommentForArticle/addCommentForArticle';
import cls from './ArticleDetailsComments.module.scss';
export var ArticleDetailsComments = memo(function (props) {
    var t = useTranslation().t;
    var className = props.className, id = props.id;
    var comments = useSelector(getArticleDetailsComments.selectAll);
    var commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    var commentsError = useSelector(getArticleCommentsError);
    var dispatch = useAppDispatch();
    var onSendComment = useCallback(function () {
        dispatch(addCommentForArticle());
    }, [dispatch]);
    useEffect(function () {
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);
    if (commentsError) {
        return _jsx("h2", { children: t('error') });
    }
    return (_jsxs(VStack, __assign({ gap: "16", max: true, className: classNames(cls.ArticleDetailsComments, {}, [className]) }, { children: [_jsx(Text, { size: ETextSize.L, title: t('comment') }), _jsx(Suspense, __assign({ fallback: _jsx(Loader, {}) }, { children: _jsx(AddCommentForm, { onSendComment: onSendComment }) })), _jsx(CommentList, { isLoading: commentsIsLoading, comments: comments })] })));
});
