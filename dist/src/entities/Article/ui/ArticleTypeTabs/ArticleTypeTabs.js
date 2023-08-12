import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Tabs } from '@/shared/ui/Tabs/Tabs';
import { useSelector } from 'react-redux';
import { getArticlesPageType } from '@/pages/ArticlesPage';
import { EArticleType } from '../../model/consts/consts';
import cls from './ArticleTypeTabs.module.scss';
export var ArticleTypeTabs = memo(function (_a) {
    var className = _a.className, onChangeType = _a.onChangeType, value = _a.value;
    var t = useTranslation().t;
    var type = useSelector(getArticlesPageType);
    var typeTabs = useMemo(function () { return [
        {
            value: EArticleType.ALL,
            content: t('ALL'),
        },
        {
            value: EArticleType.IT,
            content: t('IT'),
        },
        {
            value: EArticleType.ECONOMICS,
            content: t('ECONOMICS'),
        },
        {
            value: EArticleType.SCIENCE,
            content: t('SCIENCE'),
        },
    ]; }, [t]);
    var onChangeTab = useCallback(function (tab) {
        onChangeType(tab.value);
    }, [onChangeType]);
    return (_jsx(Tabs, { className: cls.tabs, tabs: typeTabs, value: value, onTabClick: onChangeTab }));
});
