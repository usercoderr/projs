import { lazy, Suspense } from 'react';
import { IAddCommentFormProps } from './AddCommentForm';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

const AddCommentFormLazy = lazy(() => import('./AddCommentForm'));
export const AddCommentFormAsync = (props: IAddCommentFormProps) => (
    <Suspense fallback={<Skeleton width="100%" height={120} />}>
        <AddCommentFormLazy {...props} />
    </Suspense>
);
