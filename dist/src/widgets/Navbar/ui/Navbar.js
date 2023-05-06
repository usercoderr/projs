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
import cls from './Navbar.module.scss';
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
export var Navbar = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var _b = useState(false), isAuthModal = _b[0], setIsAuthModal = _b[1];
    var onToggleModal = useCallback(function () {
        setIsAuthModal(function (prev) { return !prev; });
    }, []);
    return (_jsxs("div", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: [_jsx("div", __assign({ className: cls.links }, { children: _jsx(Button, __assign({ onClick: onToggleModal, theme: ButtonTheme.CLEAR_INVERTED }, { children: "Enter" }), void 0) }), void 0), _jsx(Modal, __assign({ onClose: onToggleModal, isOpen: isAuthModal }, { children: "loremsjbhvhvvgvgvgvgvgjvndsndjnsjfndfndfbskbf" }), void 0)] }), void 0));
};
