import { useTranslation } from 'react-i18next';
import {
    memo, useCallback, useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '@/pages/ArticleDetailsPage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    getArticleDetailsComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import cls from './ArticleDetailsComments.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ETextSize, Text } from '@/shared/ui/deprecated/Text';

interface IArticleDetailsCommentsProps {
    className?: string,
    id?: string
}

export const ArticleDetailsComments = memo((props: IArticleDetailsCommentsProps) => {
    const { t } = useTranslation();
    const { className, id } = props;
    const comments = useSelector(getArticleDetailsComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);
    const dispatch = useAppDispatch();

    const onSendComment = useCallback(() => {
        dispatch(addCommentForArticle());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);
    if (commentsError) {
        return <h2>{t('error')}</h2>;
    }
    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.ArticleDetailsComments, {}, [className])}
        >
            <Text
                size={ETextSize.L}
                title={t('comment')}
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});
