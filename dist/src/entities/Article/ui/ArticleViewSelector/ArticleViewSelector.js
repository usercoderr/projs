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
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import ListIcon from '@/shared/assets/icons/bi_list.svg';
import TiledIcon from '@/shared/assets/icons/fe_tiled.svg';
import { Button, EButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { EArticleView } from '../../model/consts/consts';
import cls from './ArticleViewSelector.module.scss';
var viewTypes = [
    {
        view: EArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: EArticleView.BIG,
        icon: ListIcon,
    },
];
export var ArticleViewSelector = memo(function (props) {
    var t = useTranslation().t;
    var className = props.className, view = props.view, onViewClick = props.onViewClick;
    var onClick = function (newView) { return function () {
        onViewClick === null || onViewClick === void 0 ? void 0 : onViewClick(newView);
    }; };
    return (_jsx("div", __assign({ className: classNames(cls.ArticleViewSelector, {}, [className]) }, { children: viewTypes.map(function (viewType) {
            var _a;
            return (_jsx(Button, __assign({ onClick: onClick(viewType.view), theme: EButtonTheme.CLEAR }, { children: _jsx(Icon, { Svg: viewType.icon, className: classNames('', (_a = {}, _a[cls.notSelected] = viewType.view !== view, _a), []) }) }), viewType.view));
        }) })));
});
