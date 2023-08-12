var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button, EButtonTheme } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Text } from '@/shared/ui/Text/Text';
import { AppLink, EAppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
export var Navbar = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var _b = useState(false), isAuthModal = _b[0], setIsAuthModal = _b[1];
    var authData = useSelector(getUserAuthData);
    var onShowModal = useCallback(function () {
        setIsAuthModal(true);
    }, []);
    var onCloseModal = useCallback(function () {
        setIsAuthModal(false);
    }, []);
    if (authData) {
        return (_jsxs("header", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: [_jsx(Text, { className: cls.appName, title: t('Usercoder') }), _jsx(AppLink, __assign({ theme: EAppLinkTheme.SECONDARY, to: RoutePath.article_create, className: cls.createBtn }, { children: t('create') })), _jsxs(HStack, __assign({ gap: "16", className: cls.actions }, { children: [_jsx(NotificationButton, {}), _jsx(AvatarDropdown, {})] })), isAuthModal
                    && _jsx(LoginModal, { isOpen: isAuthModal, onClose: onCloseModal })] })));
    }
    return (_jsxs("header", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: [_jsx(Text, { className: cls.appName, title: t('Usercoder') }), _jsx(Button, __assign({ className: cls.actions, onClick: onShowModal, theme: EButtonTheme.CLEAR_INVERTED }, { children: t('logIn') })), isAuthModal
                && (_jsx(LoginModal, { isOpen: isAuthModal, onClose: onCloseModal }))] })));
};
