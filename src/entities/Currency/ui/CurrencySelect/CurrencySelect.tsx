import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ECurrency } from 'entities/Currency/model/types/currency';

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
        <Select
            label={t('SelectCurrency')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            className={classNames('', {}, [className])}
        />
    );
});
