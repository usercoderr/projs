import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface IViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer = memo((props: IViewSelectorContainerProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const {
        view,
        onChangeView,
    } = useArticleFilters();
    return (
        <ArticleViewSelector
            view={view}
            className={className}
            onViewClick={onChangeView}
        />
    );
});
