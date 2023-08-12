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
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Card, ECardTheme } from '@/shared/ui/Card/Card';
import cls from './Tabs.module.scss';
export var Tabs = memo(function (props) {
    var t = useTranslation().t;
    var className = props.className, tabs = props.tabs, value = props.value, onTabClick = props.onTabClick;
    var clickHandle = useCallback(function (tab) { return function () {
        onTabClick(tab);
    }; }, [onTabClick]);
    return (_jsx("div", __assign({ className: classNames(cls.Tabs, {}, [className]) }, { children: tabs.map(function (tab) { return (_jsx(Card, __assign({ theme: tab.value === value ? ECardTheme.NORMAL : ECardTheme.OUTLINED, className: cls.tab, onClick: clickHandle(tab) }, { children: tab.content }), tab.value)); }) })));
});
