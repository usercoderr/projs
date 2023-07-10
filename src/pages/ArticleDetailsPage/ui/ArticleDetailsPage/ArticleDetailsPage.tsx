import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import {
    DynamicModalLoader,
    TReducerList,
} from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { useSelector } from 'react-redux';
import { getArticleCommentsError, getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { Simulate } from 'react-dom/test-utils';
import {
    articleDetailsCommentsReducer,
    getArticleDetailsComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import error = Simulate.error;

interface IArticleDetailsPageProps {
    className?: string,
}
const reducers: TReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};
const ArticleDetailsPage = ({ className }: IArticleDetailsPageProps) => {
    const { t } = useTranslation('articleDetails');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleDetailsComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);
    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('notFound')}
            </div>
        );
    }
    if (commentsError) {
        return <h2>Error</h2>;
    }
    return (
        <DynamicModalLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('comment')} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModalLoader>
    );
};

export default memo(ArticleDetailsPage);
