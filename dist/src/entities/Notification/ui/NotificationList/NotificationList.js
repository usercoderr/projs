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
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from '@/shared/ui/Stack';
import { NotificationItem } from '@/entities/Notification/ui/NotificationItem/NotificationItem';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import cls from './NotificationList.module.scss';
import { useNotifications } from '../../api/notificationApi';
export var NotificationList = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var _b = useNotifications(null, {
        pollingInterval: 5000,
    }), data = _b.data, isLoading = _b.isLoading;
    if (isLoading) {
        return (_jsxs(VStack, __assign({ gap: "16", max: true, className: classNames(cls.NotificationList, {}, [className]) }, { children: [_jsx(Skeleton, { width: "100%", border: "8px", height: "80px" }), _jsx(Skeleton, { width: "100%", border: "8px", height: "80px" }), _jsx(Skeleton, { width: "100%", border: "8px", height: "80px" })] })));
    }
    return (_jsx(VStack, __assign({ gap: "16", max: true, className: classNames(cls.NotificationList, {}, [className]) }, { children: data === null || data === void 0 ? void 0 : data.map(function (item) { return (_jsx(NotificationItem, { item: item }, item.id)); }) })));
});
