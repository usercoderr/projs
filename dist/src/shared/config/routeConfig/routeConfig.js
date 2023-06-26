var _a, _b;
import { jsx as _jsx } from "react/jsx-runtime";
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["MAIN"] = "main";
    AppRoutes["ABOUT"] = "about";
    AppRoutes["NOT_FOUND"] = "not_found";
    AppRoutes["PROFILE"] = "profile";
})(AppRoutes || (AppRoutes = {}));
export var RoutePath = (_a = {},
    _a[AppRoutes.MAIN] = '',
    _a[AppRoutes.ABOUT] = '/about',
    _a[AppRoutes.PROFILE] = '/profile',
    _a[AppRoutes.NOT_FOUND] = '*',
    _a);
export var routeConfig = (_b = {},
    _b[AppRoutes.MAIN] = {
        path: RoutePath.main,
        element: _jsx(MainPage, {}, void 0),
    },
    _b[AppRoutes.ABOUT] = {
        path: RoutePath.about,
        element: _jsx(AboutPage, {}, void 0),
    },
    _b[AppRoutes.PROFILE] = {
        path: RoutePath.profile,
        element: _jsx(ProfilePage, {}, void 0),
    },
    _b[AppRoutes.NOT_FOUND] = {
        path: RoutePath.not_found,
        element: _jsx(NotFoundPage, {}, void 0),
    },
    _b);
