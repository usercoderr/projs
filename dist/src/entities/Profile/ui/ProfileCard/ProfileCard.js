var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ETextAlign, Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency';
import cls from './ProfileCard.module.scss';
export var ProfileCard = function (props) {
    var _a, _b;
    var className = props.className, data = props.data, isLoading = props.isLoading, error = props.error, readonly = props.readonly, onChangeFirstname = props.onChangeFirstname, onChangeLastname = props.onChangeLastname, onChangeAge = props.onChangeAge, onChangeCity = props.onChangeCity, onChangeUsername = props.onChangeUsername, onChangeAvatar = props.onChangeAvatar, onChangeCurrency = props.onChangeCurrency;
    var t = useTranslation().t;
    var mods = (_a = {},
        _a[cls.editing] = !readonly,
        _a);
    if (isLoading) {
        return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, (_b = {}, _b[cls.loading] = true, _b), [className]) }, { children: _jsx(Loader, {}, void 0) }), void 0));
    }
    if (error) {
        return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, mods, [className, cls.error]) }, { children: _jsx(Text, { theme: TextTheme.ERROR, title: t('error'), text: t('reload'), align: ETextAlign.CENTER }, void 0) }), void 0));
    }
    return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, mods, [className]) }, { children: _jsxs("div", __assign({ className: cls.data }, { children: [(data === null || data === void 0 ? void 0 : data.avatar) && (_jsx("div", __assign({ className: cls.avatarWrapper }, { children: _jsx(Avatar, { src: data === null || data === void 0 ? void 0 : data.avatar, alt: data === null || data === void 0 ? void 0 : data.username }, void 0) }), void 0)), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.firstname, placeholder: t('YourName'), className: cls.input, onChange: onChangeFirstname, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.lastname, placeholder: t('YourSurname'), className: cls.input, onChange: onChangeLastname, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.age, placeholder: t('YourAge'), className: cls.input, type: "number", onChange: onChangeAge, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.city, placeholder: t('YourCity'), className: cls.input, onChange: onChangeCity, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.username, placeholder: t('YourUsername'), className: cls.input, onChange: onChangeUsername, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.avatar, placeholder: t('YourAvatar'), className: cls.input, onChange: onChangeAvatar, readonly: readonly }, void 0), _jsx(CurrencySelect, { value: data === null || data === void 0 ? void 0 : data.currency, onChange: onChangeCurrency, readonly: readonly }, void 0)] }), void 0) }), void 0));
};
