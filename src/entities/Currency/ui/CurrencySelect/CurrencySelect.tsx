import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ECurrency } from '../../model/types/currency';
import { ListBox } from '@/shared/ui/Popups';

interface ICurrencySelectProps{
    className?: string
    value?: ECurrency
    onChange?:(value:ECurrency) =>void,
    readonly?:boolean
}
const options = [
    { value: ECurrency.EUR, content: ECurrency.EUR },
    { value: ECurrency.RUB, content: ECurrency.RUB },
    { value: ECurrency.USD, content: ECurrency.USD },
];
export const CurrencySelect = memo(({
    className, readonly, value, onChange,
}: ICurrencySelectProps) => {
    const { t } = useTranslation();
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as ECurrency);
    }, [onChange]);

    return (
        <ListBox
            readonly={readonly}
            className={className}
            value={value}
            items={options}
            label={t('SelectCurrency')}
            onChange={onChangeHandler}
            direction="top right"
        />
    );
});
