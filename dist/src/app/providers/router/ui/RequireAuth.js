import { jsx as _jsx } from "react/jsx-runtime";
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles } from '@/entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { useMemo } from 'react';
export function RequireAuth(props) {
    var children = props.children, roles = props.roles;
    var auth = useSelector(getUserAuthData);
    var location = useLocation();
    var userRoles = useSelector(getUserRoles);
    var hasRequiredRoles = useMemo(function () {
        if (!roles) {
            return true;
        }
        return roles.some(function (requiredRole) { return userRoles === null || userRoles === void 0 ? void 0 : userRoles.includes(requiredRole); });
    }, [roles, userRoles]);
    if (!auth) {
        return _jsx(Navigate, { to: RoutePath.main, state: { from: location }, replace: true });
    }
    if (!hasRequiredRoles) {
        return _jsx(Navigate, { to: RoutePath.forbidden, state: { from: location }, replace: true });
    }
    return children;
}
