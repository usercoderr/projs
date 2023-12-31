import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Rating } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

export interface IArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating = memo((props: IArticleRatingProps) => {
    const { t } = useTranslation();
    const { className, articleId } = props;
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });
    const [rateArticleMutation] = useRateArticle();
    const handleRateArticle = useCallback((starsCount: number, feedback?:string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                feedback,
                rate: starsCount,
            });
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);
    const onAccept = useCallback((starsCount: number, feedback?:string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);
    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }
    const rating = data?.[0];

    return (
        <Rating
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            hasFeedback
            feedbackTitle={t('leaveFeedback')}
            title={t('rateArticle')}
            className={className}
        />
    );
});
export default ArticleRating;
