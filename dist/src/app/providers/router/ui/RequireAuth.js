import { jsx as _jsx } from "react/jsx-runtime";
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
export function RequireAuth(_a) {
    var children = _a.children;
    var auth = useSelector(getUserAuthData);
    var location = useLocation();
    if (!auth) {
        return _jsx(Navigate, { to: RoutePath.main, state: { from: location }, replace: true }, void 0);
    }
    return children;
}
