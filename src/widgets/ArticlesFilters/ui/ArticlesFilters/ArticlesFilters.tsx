import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { TSortOrder } from '@/shared/types';
import { EArticleSortField, EArticleType } from '@/entities/Article';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import cls from './ArticlesFilters.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface IArticlesFiltersProps {
  className?: string;
    sort: EArticleSortField,
    order: TSortOrder,
    type: EArticleType
    search: string | number;
    onChangeSearch: (value: string) => void;
    onChangeOrder: (newOrder: TSortOrder) => void
    onChangeSort: (newSort: EArticleSortField) => void
    onChangeTab:(type:EArticleType) =>void
}

export const ArticlesFilters = memo((props: IArticlesFiltersProps) => {
    const { t } = useTranslation();
    const {
        className,
        type,
        sort,
        order,
        search,
        onChangeSort,
        onChangeTab,
        onChangeOrder,
        onChangeSearch,
    } = props;

    return (
        <Card
            padding="24"
            className={classNames(cls.ArticlesFilters, {}, [className])}
        >
            <VStack gap="32">
                <Input
                    addonLeft={<Icon Svg={SearchIcon} />}
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('search')}
                />
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeTab}
                />

            </VStack>

        </Card>
    );
});
