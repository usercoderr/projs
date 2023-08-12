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
import { memo } from 'react';
import { Card, ECardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import cls from './NotificationItem.module.scss';
export var NotificationItem = memo(function (props) {
    var t = useTranslation().t;
    var className = props.className, item = props.item;
    var content = (_jsx(Card, __assign({ theme: ECardTheme.OUTLINED, className: classNames(cls.NotificationItem, {}, [className]) }, { children: _jsx(Text, { title: item.title, text: item.description }) })));
    if (item.href) {
        return (_jsx("a", __assign({ className: cls.link, target: "_blank", href: item.href, rel: "noreferrer" }, { children: content })));
    }
    return content;
});
