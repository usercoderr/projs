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
import { memo, useCallback } from 'react';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import CopyIcon from '../../assets/icons/copy.svg';
import cls from './Code.module.scss';
export var Code = memo(function (_a) {
    var className = _a.className, text = _a.text;
    var t = useTranslation().t;
    var onCopy = useCallback(function () {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (_jsxs("pre", __assign({ className: classNames(cls.Code, {}, [className]) }, { children: [_jsx(Button, __assign({ onClick: onCopy, className: cls.copyBtn, theme: EButtonTheme.CLEAR }, { children: _jsx(CopyIcon, { className: cls.copyIcon }, void 0) }), void 0), _jsx("code", { children: text }, void 0)] }), void 0));
});
