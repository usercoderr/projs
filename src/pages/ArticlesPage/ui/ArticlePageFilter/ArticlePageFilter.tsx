import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ArticlePageFilter.module.scss';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface IArticlePageFilterProps {
    className?: string
}

export const ArticlePageFilter = memo(({ className }: IArticlePageFilterProps) => {
    const { t } = useTranslation();
    const {
        sort,
        order,
        onChangeOrder,
        onChangeSort,
        onChangeView,
        view,
        search,
        onChangeSearch,
        type,
        onChangeTab,
    } = useArticleFilters();
    return (
        <div className={classNames(cls.ArticlePageFilter, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector
                    onViewClick={onChangeView}
                    view={view}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('search')}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeTab}
            />
        </div>
    );
});
