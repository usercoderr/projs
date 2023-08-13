import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Rating } from '@/entities/Rating';

export interface IProfileRatingProps {
    className?: string
    profileId:string
}

const ProfileRating = memo((props: IProfileRatingProps) => {
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { className, profileId } = props;
    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: userData?.id ?? '',
    });
    const [rateProfileMutation] = useRateProfile();
    const handleRateArticle = useCallback((starsCount: number, feedback?:string) => {
        try {
            rateProfileMutation({
                userId: userData?.id ?? '',
                profileId,
                feedback,
                rate: starsCount,
            });
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
    }, [profileId, rateProfileMutation, userData?.id]);
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
            max
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            hasFeedback
            feedbackTitle={t('leaveFeedback')}
            title={t('rateProfile')}
            className={className}
        />
    );
});
export default ProfileRating;
