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
import { memo, useState } from 'react';
import NotificationIcon from '@/shared/assets/icons/popUp.svg';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, EButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import { Popover } from '@/shared/ui/Popups';
import cls from './NotificationButton.module.scss';
export var NotificationButton = memo(function (_a) {
    var className = _a.className;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var onOpenDrawer = function () {
        setIsOpen(true);
    };
    var onCloseDrawer = function () {
        setIsOpen(false);
    };
    var trigger = (_jsx(Button, __assign({ onClick: onOpenDrawer, theme: EButtonTheme.CLEAR }, { children: _jsx(Icon, { inverted: true, Svg: NotificationIcon }) })));
    if (isMobile) {
        return (_jsxs(MobileView, { children: [trigger, _jsx(AnimationProvider, { children: _jsx(Drawer, __assign({ isOpen: isOpen, onClose: onCloseDrawer }, { children: _jsx(NotificationList, { className: cls.notification }) })) })] }));
    }
    return (_jsx("div", { children: _jsx(BrowserView, { children: _jsx(Popover, __assign({ className: classNames(cls.NotificationButton, {}, [className]), direction: "bottom left", trigger: trigger }, { children: _jsx(NotificationList, { className: cls.notifications }) })) }) }));
});
