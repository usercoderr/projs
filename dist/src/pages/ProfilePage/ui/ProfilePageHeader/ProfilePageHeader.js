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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';
export var ProfilePageHeader = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var readonly = useSelector(getProfileReadonly);
    var dispatch = useAppDispatch();
    var onEdit = useCallback(function () {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    var onCancelEdit = useCallback(function () {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    var onSave = useCallback(function () {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (_jsx("div", __assign({ className: classNames(cls.ProfilePageHeader, {}, [className]) }, { children: _jsxs("div", __assign({ className: cls.header }, { children: [_jsx(Text, { text: t('Profile') }, void 0), readonly ? (_jsx(Button, __assign({ className: cls.button, theme: EButtonTheme.OUTLINE, onClick: onEdit }, { children: t('Edit') }), void 0)) : (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ className: cls.button, theme: EButtonTheme.OUTLINE_RED, onClick: onCancelEdit }, { children: t('Cancel') }), void 0), _jsx(Button, __assign({ className: cls.button, theme: EButtonTheme.OUTLINE, onClick: onSave }, { children: t('Save') }), void 0)] }, void 0))] }), void 0) }), void 0));
};
