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
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from 'features/AuthByUsername';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './LoginModal.module.scss';
export var LoginModal = function (_a) {
    var className = _a.className, isOpen = _a.isOpen, onClose = _a.onClose;
    var t = useTranslation().t;
    return (_jsx(Modal, __assign({ isOpen: isOpen, onClose: onClose, lazy: true, className: classNames(cls.LoginModal, {}, [className]) }, { children: _jsx(Suspense, __assign({ fallback: _jsx(Loader, {}, void 0) }, { children: _jsx(LoginFormAsync, { onSuccess: onClose }, void 0) }), void 0) }), void 0));
};
