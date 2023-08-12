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
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { VStack } from '@/shared/ui/Stack';
import cls from './CommentItem.module.scss';
export var CommentItem = memo(function (props) {
    var _a, _b, _c;
    var className = props.className, comment = props.comment, isLoading = props.isLoading;
    var t = useTranslation().t;
    if (isLoading) {
        return (_jsxs(VStack, __assign({ gap: "8", max: true, className: classNames(cls.CommentItem, {}, [className, cls.loading]) }, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsx(Skeleton, { width: 30, height: 30, border: "50%" }), _jsx(Skeleton, { width: 100, height: 16, className: cls.username })] })), _jsx(Skeleton, { className: cls.text, width: "100%", height: 50 })] })));
    }
    if (!comment) {
        return null;
    }
    return (_jsxs(VStack, __assign({ gap: "8", max: true, className: classNames(cls.CommentItem, {}, [className]) }, { children: [_jsxs(AppLink, __assign({ to: "".concat(RoutePath.profile).concat(comment.user.id), className: cls.header }, { children: [((_a = comment.user) === null || _a === void 0 ? void 0 : _a.avatar)
                        && _jsx(Avatar, { size: 30, src: (_b = comment.user) === null || _b === void 0 ? void 0 : _b.avatar }), _jsx(Text, { className: cls.username, title: (_c = comment.user) === null || _c === void 0 ? void 0 : _c.username })] })), _jsx(Text, { className: cls.text, text: comment.text })] })));
});
