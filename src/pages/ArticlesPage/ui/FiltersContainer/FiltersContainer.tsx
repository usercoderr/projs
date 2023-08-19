import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface IFiltersContainerProps {
  className?: string;
}

export const FiltersContainer = memo((props: IFiltersContainerProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const {
        sort,
        order,
        onChangeOrder,
        onChangeSort,
        search,
        onChangeSearch,
        type,
        onChangeTab,
    } = useArticleFilters();
    return (
        <ArticlesFilters
            sort={sort}
            order={order}
            type={type}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            onChangeTab={onChangeTab}
            onChangeSearch={onChangeSearch}
            search={search}
        />
    );
});
