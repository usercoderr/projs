import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

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
    console.log(localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY));
    return (
        <ArticleViewSelector
            view={view}
            className={className}
            onViewClick={onChangeView}
        />
    );
});
