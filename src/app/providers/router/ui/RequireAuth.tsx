import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import React, { useMemo } from 'react';
import { getUserAuthData, getUserRoles } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { EUserRole } from '@/entities/User/model/consts/consts';

interface RequireAuthProps{
    children?: React.JSX.Element,
    roles?: EUserRole[]

}
export function RequireAuth(props: RequireAuthProps) {
    const { children, roles } = props;
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((requiredRole) => userRoles?.includes(requiredRole));
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }
    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    return children;
}
