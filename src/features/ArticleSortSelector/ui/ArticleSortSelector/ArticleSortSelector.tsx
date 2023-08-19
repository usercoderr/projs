import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { EArticleSortField } from '@/entities/Article';
import { TSortOrder } from '@/shared/types';
import cls from './ArticleSortSelector.module.scss';
import { ISelectOption, Select } from '@/shared/ui/deprecated/Select';
import { ToggleFeatures } from '@/shared/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

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
    const orderOptions = useMemo<ISelectOption<TSortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('aToZ'),
        },
        {
            value: 'desc',
            content: t('zToA'),
        },
    ], [t]);

    const sortFieldOptions = useMemo <ISelectOption<EArticleSortField>[]>(() => [
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

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <div className={classNames(cls.ArticleSortSelectorRedesigned, {}, [className])}>
                    <VStack gap="8" align="start">
                        <Text text="sortBy" />
                        <ListBox
                            items={sortFieldOptions}
                            value={sort}
                            onChange={onChangeSort}
                        />
                        <ListBox
                            items={orderOptions}
                            value={order}
                            onChange={onChangeOrder}
                        />
                    </VStack>
                </div>
            )}
            off={(
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
            )}
        />

    );
});
