import { FC, lazy } from 'react';
import { ILoginFormProps } from '@/features/AuthByUsername/ui/LoginForm/LoginForm';

export const LoginFormAsync = lazy <FC<ILoginFormProps>>(() => import('./LoginForm'));
