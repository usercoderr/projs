import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ECountry } from 'entities/Country/model/types/country';
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
    return (_jsx(Select, { label: t('SelectCountry'), options: options, value: value, onChange: onChangeHandler, readonly: readonly, className: classNames('', {}, [className]) }, void 0));
});
