import { lazy, Suspense } from 'react';
import { IProfileRatingProps } from './ProfileRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

const ProfileRatingLazy = lazy(() => import('./ProfileRating'));
export const ProfileRatingAsync = (props: IProfileRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={120} />}>
        <ProfileRatingLazy {...props} />
    </Suspense>
);
