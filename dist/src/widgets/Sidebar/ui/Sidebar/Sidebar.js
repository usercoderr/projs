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
import { useState } from 'react';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, EButtonTheme } from '@/shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { SidebarItem } from '@/widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { VStack } from '@/shared/ui/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';
export var Sidebar = function (_a) {
    var _b;
    var className = _a.className;
    var t = useTranslation().t;
    var _c = useState(false), collapsed = _c[0], setCollapsed = _c[1];
    var sidebarItemsList = useSelector(getSidebarItems);
    var onToggle = function () {
        setCollapsed(function (prev) { return !prev; });
    };
    var itemsList = sidebarItemsList.map(function (item) { return (_jsx(SidebarItem, { collapsed: collapsed, item: item }, item.path)); });
    return (_jsxs("menu", __assign({ "data-testid": "sidebar", className: classNames(cls.Sidebar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [className]) }, { children: [_jsx(Button, __assign({ theme: EButtonTheme.BACKGROUND_INVERTED, "data-testid": "sidebar-toggle", onClick: onToggle, square: true, size: ButtonSize.L, className: cls.collapsedBtn }, { children: collapsed ? '>' : '<' })), _jsx(VStack, __assign({ gap: "8", className: cls.items }, { children: itemsList })), _jsxs("div", __assign({ className: cls.switchers }, { children: [_jsx(ThemeSwitcher, {}), _jsx(LangSwitcher, { short: collapsed, className: cls.lang })] }))] })));
};
