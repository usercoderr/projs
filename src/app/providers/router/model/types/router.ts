import { RouteProps } from 'react-router-dom';
import { EUserRole } from '@/entities/User';

export type EAppRouteProps = RouteProps & {
    authOnly?: boolean,
    roles?: EUserRole[]
}
