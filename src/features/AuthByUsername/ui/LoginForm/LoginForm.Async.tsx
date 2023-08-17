import { lazy, Suspense } from 'react';
import { ILoginFormProps } from '../../ui/LoginForm/LoginForm';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

const LoginFormLazy = lazy(() => import('./LoginForm'));
export const LoginFormAsync = (props: ILoginFormProps) => (
    <Suspense fallback={<Skeleton width={400} height={190} />}>
        <LoginFormLazy {...props} />
    </Suspense>

);
