import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ECountry } from '@/entities/Country/model/types/country';
import { ListBox } from '@/shared/ui/Popups';
var options = [
    { value: ECountry.KAZAKHSTAN, content: ECountry.KAZAKHSTAN },
    { value: ECountry.UKRAINE, content: ECountry.UKRAINE },
    { value: ECountry.KYRGYZSTAN, content: ECountry.KYRGYZSTAN },
    { value: ECountry.UZBEKISTAN, content: ECountry.UZBEKISTAN },
];
export var CountrySelect = memo(function (_a) {
    var className = _a.className, readonly = _a.readonly, value = _a.value, onChange = _a.onChange;
    var t = useTranslation().t;
    var onChangeHandler = useCallback(function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (_jsx(ListBox, { readonly: readonly, className: className, value: value, label: t('SelectCountry'), items: options, onChange: onChangeHandler, direction: "top right" }));
});
