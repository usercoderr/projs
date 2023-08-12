import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { ITabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { useSelector } from 'react-redux';
import { getArticlesPageType } from '@/pages/ArticlesPage';
import { EArticleType } from '../../model/consts/consts';
import cls from './ArticleTypeTabs.module.scss';

interface IArticleTypeTabsProps {
    className?: string,
    value: EArticleType
    onChangeType:(type:EArticleType) =>void
}

export const ArticleTypeTabs = memo(({ className, onChangeType, value }: IArticleTypeTabsProps) => {
    const { t } = useTranslation();
    const type = useSelector(getArticlesPageType);

    const typeTabs = useMemo<ITabItem[]>(() => [
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
    ], [t]);
    const onChangeTab = useCallback((tab: ITabItem) => {
        onChangeType(tab.value as EArticleType);
    }, [onChangeType]);
    return (
        <Tabs
            className={cls.tabs}
            tabs={typeTabs}
            value={value}
            onTabClick={onChangeTab}
        />
    );
});
