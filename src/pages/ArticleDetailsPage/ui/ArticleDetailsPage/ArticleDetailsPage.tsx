import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ETextSize, Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import {
    DynamicModalLoader,
    TReducerList,
} from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
    getArticleRecommendationsError,
    getArticleRecommendationsIsLoading,
} from 'pages/ArticleDetailsPage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { Page } from 'widgets/Page/Page';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import {
    ArticleDetailsPageHeader,
} from '../../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    articleDetailsCommentsReducer,
    getArticleDetailsComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
    articleDetailsRecommendationsReducer,
    getArticleDetailsRecommendations,
} from '../../model/slices/articleDetailsRecommendationsSlice';

interface IArticleDetailsPageProps {
    className?: string,
}
const reducers: TReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsRecommendations: articleDetailsRecommendationsReducer,
};
const ArticleDetailsPage = ({ className }: IArticleDetailsPageProps) => {
    const { t } = useTranslation('articleDetails');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleDetailsComments.selectAll);
    const recommendations = useSelector(getArticleDetailsRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const recommendationsError = useSelector(getArticleRecommendationsError);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSendComment = useCallback(() => {
        dispatch(addCommentForArticle());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    }, [dispatch, id]);
    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('notFound')}
            </Page>
        );
    }
    if (commentsError) {
        return <h2>{t('error')}</h2>;
    }
    return (
        <DynamicModalLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text
                    size={ETextSize.L}
                    className={cls.commentTitle}
                    title={t('recommendations')}
                />

                <ArticleList
                    className={cls.recommendations}
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                />
                <Text
                    size={ETextSize.L}
                    className={cls.commentTitle}
                    title={t('comment')}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModalLoader>
    );
};

export default memo(ArticleDetailsPage);
