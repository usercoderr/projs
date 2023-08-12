var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Dropdown } from '@/shared/ui/Popups';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager } from '@/entities/User';
import { userActions } from '@/entities/User/model/slices/userSlice';
import { useNavigate } from 'react-router';
import cls from './AvatarDropdown.module.scss';
export var AvatarDropdown = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var isAdmin = useSelector(isUserAdmin);
    var isManager = useSelector(isUserManager);
    var authData = useSelector(getUserAuthData);
    var dispatch = useDispatch();
    var navigate = useNavigate();
    var isAdminPanelAvailable = isAdmin || isManager;
    var onLogOut = useCallback(function () {
        dispatch(userActions.logOut());
        navigate('/');
    }, [dispatch, navigate]);
    if (!authData) {
        return null;
    }
    return (_jsx(Dropdown, { className: classNames(cls.AvatarDropdown, {}, [className]), direction: "bottom left", items: __spreadArray(__spreadArray([], (isAdminPanelAvailable ? [{
                content: t('adminPanelPage'),
                href: RoutePath.admin_panel,
            }] : []), true), [
            {
                content: t('Profile'),
                href: RoutePath.profile + authData.id,
            },
            {
                content: t('logOut'),
                onClick: onLogOut,
            },
        ], false), trigger: (_jsx(Avatar, { src: authData.avatar, size: 30 })) }));
});
