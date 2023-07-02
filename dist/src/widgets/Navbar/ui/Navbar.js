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
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User/model/slices/userSlice';
import { getUserAuthData } from 'entities/User';
import { useNavigate } from 'react-router';
import cls from './Navbar.module.scss';
export var Navbar = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var _b = useState(false), isAuthModal = _b[0], setIsAuthModal = _b[1];
    var dispatch = useDispatch();
    var navigate = useNavigate();
    var authData = useSelector(getUserAuthData);
    var onShowModal = useCallback(function () {
        setIsAuthModal(true);
    }, []);
    var onCloseModal = useCallback(function () {
        setIsAuthModal(false);
    }, []);
    var onLogOut = useCallback(function () {
        dispatch(userActions.logOut());
        navigate('/');
    }, [dispatch]);
    return (_jsxs("div", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: [_jsx("div", __assign({ className: cls.links }, { children: authData ? (_jsx(Button, __assign({ onClick: onLogOut, theme: EButtonTheme.CLEAR_INVERTED }, { children: "LogOut" }), void 0)) : (_jsx(Button, __assign({ onClick: onShowModal, theme: EButtonTheme.CLEAR_INVERTED }, { children: "LogIn" }), void 0)) }), void 0), isAuthModal
                && _jsx(LoginModal, { isOpen: isAuthModal, onClose: onCloseModal }, void 0)] }), void 0));
};
