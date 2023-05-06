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
import { useCallback, useEffect, useRef, useState } from 'react';
import cls from './Modal.module.scss';
import { Portal } from "shared/ui/Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";
var ANIMATION_DELAY = 500;
export var Modal = function (props) {
    var _a;
    var className = props.className, children = props.children, isOpen = props.isOpen, onClose = props.onClose;
    var _b = useState(false), isClosing = _b[0], setIsClosing = _b[1];
    var timerRef = useRef();
    var theme = useTheme().theme;
    var closeHandler = useCallback(function () {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(function () {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    var onKeyDown = useCallback(function (e) {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);
    var onContentClick = function (event) {
        event.stopPropagation();
    };
    useEffect(function () {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return function () {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout();
        };
    }, [isOpen]);
    console.log(isClosing);
    var mods = (_a = {},
        _a[cls.opened] = isOpen,
        _a[cls.isClosing] = isClosing,
        _a[cls[theme]] = true,
        _a);
    return (_jsx(Portal, { children: _jsx("div", __assign({ className: classNames(cls.Modal, mods, [className]) }, { children: _jsx("div", __assign({ onClick: closeHandler, className: cls.overlay }, { children: _jsx("div", __assign({ onClick: function (event) { return onContentClick(event); }, className: cls.content }, { children: children }), void 0) }), void 0) }), void 0) }, void 0));
};
