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
import { memo } from 'react';
import { EArticleView } from '@/entities/Article';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import cls from './ArticleListItem.module.scss';
export var ArticleListItemSkeleton = memo(function (props) {
    var className = props.className, view = props.view;
    if (view === EArticleView.BIG) {
        return (_jsx("div", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsx(Skeleton, { width: 30, height: 30, border: "50%" }), _jsx(Skeleton, { width: 150, height: 16, className: cls.username }), _jsx(Skeleton, { width: 150, height: 16, className: cls.date })] })), _jsx(Skeleton, { width: 250, height: 24, className: cls.title }), _jsx(Skeleton, { width: "100%", height: 200, className: cls.img }), _jsx("div", __assign({ className: cls.footer }, { children: _jsx(Skeleton, { width: 200, height: 36 }) }))] }) })));
    }
    return (_jsx("div", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, { children: [_jsx("div", __assign({ className: cls.imageWrapper }, { children: _jsx(Skeleton, { width: 200, height: 200, className: cls.img }) })), _jsx("div", __assign({ className: cls.infoWrapper }, { children: _jsx(Skeleton, { width: 130, height: 16 }) })), _jsx(Skeleton, { width: 150, height: 16 })] }) })));
});
