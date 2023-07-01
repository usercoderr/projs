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
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import cls from './SidebarItem.module.scss';
export var SidebarItem = memo(function (_a) {
    var _b;
    var item = _a.item, collapsed = _a.collapsed;
    var t = useTranslation().t;
    return (_jsx("div", __assign({ className: cls.item }, { children: _jsxs(AppLink, __assign({ theme: AppLinkTheme.SECONDARY, to: item.path, className: classNames(cls.link, (_b = {}, _b[cls.collapsed] = collapsed, _b)) }, { children: [_jsx(item.Icon, { className: cls.icon }, void 0), _jsx("span", __assign({ className: cls.linkSpan }, { children: t(item.text) }), void 0)] }), void 0) }), void 0));
});