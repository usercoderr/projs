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
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import HomeIcon from 'shared/assets/icons/homeIcon.svg';
import AboutIcon from 'shared/assets/icons/aboutIcon.svg';
import cls from './Sidebar.module.scss';
export var Sidebar = function (_a) {
    var _b;
    var className = _a.className;
    var t = useTranslation().t;
    var _c = useState(false), collapsed = _c[0], setCollapsed = _c[1];
    var onToggle = function () {
        setCollapsed(function (prev) { return !prev; });
    };
    return (_jsxs("div", __assign({ "data-testid": "sidebar", className: classNames(cls.Sidebar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [className]) }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.BACKGROUND_INVERTED, "data-testid": "sidebar-toggle", onClick: onToggle, square: true, size: ButtonSize.L, className: cls.collapsedBtn }, { children: collapsed ? '>' : '<' }), void 0), _jsxs("div", __assign({ className: cls.items }, { children: [_jsx("div", __assign({ className: cls.item }, { children: _jsxs(AppLink, __assign({ theme: AppLinkTheme.SECONDARY, to: RoutePath.main, className: cls.link }, { children: [_jsx(HomeIcon, { className: cls.icon }, void 0), _jsx("span", { children: t('Главная') }, void 0)] }), void 0) }), void 0), _jsx("div", __assign({ className: cls.item }, { children: _jsxs(AppLink, __assign({ theme: AppLinkTheme.SECONDARY, to: RoutePath.about, className: cls.link }, { children: [_jsx(AboutIcon, { className: cls.icon }, void 0), _jsx("span", { children: t('О сайте') }, void 0)] }), void 0) }), void 0)] }), void 0), _jsxs("div", __assign({ className: cls.switchers }, { children: [_jsx(ThemeSwitcher, {}, void 0), _jsx(LangSwitcher, { short: collapsed, className: cls.lang }, void 0)] }), void 0)] }), void 0));
};
