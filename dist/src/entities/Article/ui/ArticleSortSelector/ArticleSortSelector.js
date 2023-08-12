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
import { memo, useMemo } from 'react';
import { Select } from '@/shared/ui/Select/Select';
import { EArticleSortField } from '@/entities/Article';
import cls from './ArticleSortSelector.module.scss';
export var ArticleSortSelector = memo(function (props) {
    var t = useTranslation().t;
    var className = props.className, sort = props.sort, order = props.order, onChangeOrder = props.onChangeOrder, onChangeSort = props.onChangeSort;
    var orderOptions = useMemo(function () { return [
        {
            value: 'asc',
            content: t('aToZ'),
        },
        {
            value: 'desc',
            content: t('zToA'),
        },
    ]; }, [t]);
    var sortFieldOptions = useMemo(function () { return [
        {
            value: EArticleSortField.CREATED,
            content: t('createdAt'),
        },
        {
            value: EArticleSortField.TITLE,
            content: t('title'),
        },
        {
            value: EArticleSortField.VIEWS,
            content: t('views'),
        },
    ]; }, [t]);
    // const changeSortHandler = useCallback((newSort: string) => {
    //     onChangeSort(newSort as EArticleSortField);
    // }, [onChangeSort]);
    // const changeOrderHandler = useCallback((newOrder: string) => {
    //     onChangeOrder(newOrder as TSortOrder);
    // }, [onChangeOrder]);
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleSortSelector, {}, [className]) }, { children: [_jsx(Select, { options: sortFieldOptions, label: t('sortBy'), value: sort, onChange: onChangeSort }), _jsx(Select, { options: orderOptions, label: t('sortBy'), value: order, className: cls.order, onChange: onChangeOrder })] })));
});
