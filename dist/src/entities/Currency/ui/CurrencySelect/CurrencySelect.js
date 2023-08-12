import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ECurrency } from '@/entities/Currency/model/types/currency';
import { ListBox } from '@/shared/ui/Popups';
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
    return (_jsx(ListBox, { readonly: readonly, className: className, value: value, items: options, label: t('SelectCurrency'), onChange: onChangeHandler, direction: "top right" }));
});
