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
var _a;
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';
export var TextTheme;
(function (TextTheme) {
    TextTheme["PRIMARY"] = "primary";
    TextTheme["ERROR"] = "error";
})(TextTheme || (TextTheme = {}));
export var ETextAlign;
(function (ETextAlign) {
    ETextAlign["RIGHT"] = "right";
    ETextAlign["LEFT"] = "left";
    ETextAlign["CENTER"] = "center";
})(ETextAlign || (ETextAlign = {}));
export var ETextSize;
(function (ETextSize) {
    ETextSize["S"] = "size_s";
    ETextSize["M"] = "size_m";
    ETextSize["L"] = "size_l";
})(ETextSize || (ETextSize = {}));
var mapSizeToHeaderTag = (_a = {},
    _a[ETextSize.S] = 'h3',
    _a[ETextSize.M] = 'h2',
    _a[ETextSize.L] = 'h1',
    _a);
export var Text = memo(function (props) {
    var _a;
    var className = props.className, text = props.text, title = props.title, _b = props.theme, theme = _b === void 0 ? TextTheme.PRIMARY : _b, _c = props.align, align = _c === void 0 ? ETextAlign.LEFT : _c, _d = props.size, size = _d === void 0 ? ETextSize.M : _d, _e = props["data-testid"], dataTestId = _e === void 0 ? 'Text' : _e;
    var HeaderTag = mapSizeToHeaderTag[size];
    var mods = (_a = {},
        _a[cls[theme]] = true,
        _a[cls[align]] = true,
        _a[cls[size]] = true,
        _a);
    return (_jsxs("div", __assign({ className: classNames(cls.Text, mods, [className]) }, { children: [title && (_jsx(HeaderTag, __assign({ className: cls.title, "data-testid": "".concat(dataTestId, ".Header") }, { children: title }))), text && (_jsx("p", __assign({ className: cls.text, "data-testid": "".concat(dataTestId, ".paragraph") }, { children: text })))] })));
});
