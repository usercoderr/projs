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
import { memo, useMemo } from 'react';
import cls from './Select.module.scss';
export var Select = memo(function (props) {
    var className = props.className, label = props.label, options = props.options, value = props.value, onChange = props.onChange, readonly = props.readonly;
    var optionList = useMemo(function () { return options === null || options === void 0 ? void 0 : options.map(function (opt) { return (_jsx("option", __assign({ className: cls.option, value: opt.value }, { children: opt.content }), opt.value)); }); }, [options]);
    var mods = {};
    var onChangeHandler = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    };
    return (_jsxs("div", __assign({ className: classNames(cls.Wrapper, mods, [className]) }, { children: [label
                && _jsx("span", __assign({ className: cls.label }, { children: label }), void 0), _jsx("select", __assign({ disabled: readonly, className: cls.select, value: value, onChange: onChangeHandler }, { children: optionList }), void 0)] }), void 0));
});
