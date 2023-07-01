import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ECurrency } from 'entities/Currency/model/types/currency';
var options = [
    { value: ECurrency.EUR, content: ECurrency.EUR },
    { value: ECurrency.RUB, content: ECurrency.RUB },
    { value: ECurrency.USD, content: ECurrency.USD },
];
export var CurrencySelect = memo(function (_a) {
    var className = _a.className, readonly = _a.readonly, value = _a.value, onChange = _a.onChange;
    var t = useTranslation().t;
    var onChangeHandler = useCallback(function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (_jsx(Select, { label: t('SelectCountry'), options: options, value: value, onChange: onChangeHandler, readonly: readonly, className: classNames('', {}, [className]) }, void 0));
});