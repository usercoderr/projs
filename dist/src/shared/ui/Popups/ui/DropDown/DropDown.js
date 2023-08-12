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
import { Menu as HMenu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Fragment } from 'react';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import cls from './DropDown.module.scss';
import popupCls from '../../styles/popup.module.scss';
export function Dropdown(props) {
    var className = props.className, items = props.items, trigger = props.trigger, _a = props.direction, direction = _a === void 0 ? 'bottom right' : _a;
    var menuClasses = [mapDirectionClass[direction]];
    return (_jsxs(HMenu, __assign({ as: "div", className: classNames(cls.DropDown, {}, [className, popupCls.popup]) }, { children: [_jsx(HMenu.Button, __assign({ className: popupCls.trigger }, { children: trigger })), _jsx(HMenu.Items, __assign({ className: classNames(cls.menu, {}, menuClasses) }, { children: items.map(function (item) {
                    var content = function (_a) {
                        var _b;
                        var active = _a.active;
                        return (_jsx("button", __assign({ type: "button", onClick: item.onClick, disabled: item.disabled, className: classNames(cls.item, (_b = {},
                                _b[popupCls.active] = active,
                                _b), []) }, { children: item.content })));
                    };
                    if (item.href) {
                        return (_jsx(HMenu.Item, __assign({ disabled: item.disabled, as: AppLink, to: item.href }, { children: content })));
                    }
                    return (_jsx(HMenu.Item, __assign({ disabled: item.disabled, as: Fragment }, { children: content })));
                }) }))] })));
}
