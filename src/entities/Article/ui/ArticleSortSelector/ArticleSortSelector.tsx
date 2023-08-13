import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ISelectOptions, Select } from '@/shared/ui/Select/Select';
import { EArticleSortField } from '@/entities/Article';
import { TSortOrder } from '@/shared/types';
import cls from './ArticleSortSelector.module.scss';

interface IArticleSortSelectorProps {
    className?: string,
    sort: EArticleSortField,
    order: TSortOrder,
    onChangeOrder: (newOrder: TSortOrder) => void
    onChangeSort: (newSort: EArticleSortField) => void
}

export const ArticleSortSelector = memo((props: IArticleSortSelectorProps) => {
    const { t } = useTranslation();
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;
    const orderOptions = useMemo<ISelectOptions<TSortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('aToZ'),
        },
        {
            value: 'desc',
            content: t('zToA'),
        },
    ], [t]);

    const sortFieldOptions = useMemo < ISelectOptions<EArticleSortField>[]>(() => [
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
    ], [t]);

    // const changeSortHandler = useCallback((newSort: string) => {
    //     onChangeSort(newSort as EArticleSortField);
    // }, [onChangeSort]);
    // const changeOrderHandler = useCallback((newOrder: string) => {
    //     onChangeOrder(newOrder as TSortOrder);
    // }, [onChangeOrder]);
    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<EArticleSortField>
                options={sortFieldOptions}
                label={t('sortBy')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select<TSortOrder>
                options={orderOptions}
                label={t('sortBy')}
                value={order}
                className={cls.order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
