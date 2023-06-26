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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useEffect, useRef, useState, } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
export var Input = memo(function (props) {
    var _a;
    var className = props.className, children = props.children, onChange = props.onChange, autofocus = props.autofocus, value = props.value, _b = props.type, type = _b === void 0 ? 'text' : _b, placeholder = props.placeholder, readonly = props.readonly, otherProps = __rest(props, ["className", "children", "onChange", "autofocus", "value", "type", "placeholder", "readonly"]);
    var _c = useState(false), isFocused = _c[0], setIsFocused = _c[1];
    var _d = useState(0), caretPosition = _d[0], setCaretPosition = _d[1];
    var inputRef = useRef(null);
    var isCaretVisible = isFocused && !readonly;
    var onChangeHandler = function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange(event.target.value);
        setCaretPosition(event.target.value.length);
    };
    var onFocus = function () {
        setIsFocused(true);
    };
    var onBlur = function () {
        setIsFocused(false);
    };
    var onSelect = function (event) {
        setCaretPosition((event === null || event === void 0 ? void 0 : event.target.selectionStart) || 0);
    };
    useEffect(function () {
        if (autofocus) {
            inputRef.current.focus();
            setIsFocused(true);
        }
    }, []);
    var mods = (_a = {},
        _a[cls.readonly] = readonly,
        _a);
    return (_jsxs(_Fragment, { children: [placeholder && (_jsx("div", __assign({ className: cls.placeholder }, { children: "".concat(placeholder) }), void 0)), _jsxs("div", __assign({ className: cls.caretWrapper }, { children: [_jsx("input", __assign({ ref: inputRef, onSelect: onSelect, type: type, readOnly: readonly, onChange: onChangeHandler, value: value, onFocus: onFocus, onBlur: onBlur, className: classNames(cls.Input, {}, [className]) }, otherProps, { children: children }), void 0), isCaretVisible && (_jsx("span", { style: { left: "".concat(caretPosition * 9, "px") }, className: cls.caret }, void 0))] }), void 0)] }, void 0));
});
