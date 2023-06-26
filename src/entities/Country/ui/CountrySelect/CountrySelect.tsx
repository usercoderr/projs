import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ECountry } from 'entities/Country/model/types/country';

interface ICurrencySelectProps{
    className?: string
    value?: ECountry
    onChange?:(value:ECountry) =>void,
    readonly?:boolean
}
const options = [
    { value: ECountry.KAZAKHSTAN, content: ECountry.KAZAKHSTAN },
    { value: ECountry.UKRAINE, content: ECountry.UKRAINE },
    { value: ECountry.KYRGYZSTAN, content: ECountry.KYRGYZSTAN },
    { value: ECountry.UZBEKISTAN, content: ECountry.UZBEKISTAN },

];
export const CountrySelect = memo(({
    className, readonly, value, onChange,
}: ICurrencySelectProps) => {
    const { t } = useTranslation();
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as ECountry);
    }, [onChange]);
    return (
        <Select
            label={t('SelectCountry')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            className={classNames('', {}, [className])}
        />
    );
});
