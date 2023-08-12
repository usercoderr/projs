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
import { memo, useEffect, useRef, } from 'react';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getScrollByPath, scrollSaverActions } from '@/features/ScrollSaver';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';
export var Page = memo(function (props) {
    var t = useTranslation().t;
    var className = props.className, children = props.children, onScrollEnd = props.onScrollEnd;
    var dispatch = useAppDispatch();
    var pathname = useLocation().pathname;
    var scrollPosition = useSelector(function (state) { return getScrollByPath(state, pathname); });
    var triggerRef = useRef();
    var wrapperRef = useRef();
    var onScroll = useThrottle(function (e) {
        dispatch(scrollSaverActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);
    useInfiniteScroll({
        triggerRef: triggerRef,
        wrapperRef: wrapperRef,
        callback: onScrollEnd,
    });
    useEffect(function () {
        wrapperRef.current.scrollTop = scrollPosition;
    }, [scrollPosition]);
    return (_jsxs("section", __assign({ ref: wrapperRef, className: classNames(cls.Page, {}, [className]), onScroll: onScroll }, { children: [children, onScrollEnd
                ? (_jsx("div", { className: cls.trigger, ref: triggerRef })) : null] })));
});
