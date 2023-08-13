import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups';
import { ECountry } from '@/entities/Country';

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
        <ListBox
            readonly={readonly}
            className={className}
            value={value}
            label={t('SelectCountry')}
            items={options}
            onChange={onChangeHandler}
            direction="top right"
        />
    );
});
