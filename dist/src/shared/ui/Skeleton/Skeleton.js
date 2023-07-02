import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Skeleton.module.scss';
export var Skeleton = memo(function (props) {
    var className = props.className, border = props.border, height = props.height, width = props.width;
    var styles = {
        width: width,
        height: height,
        borderRadius: border,
    };
    return (_jsx("div", { className: classNames(cls.Skeleton, {}, [className]), style: styles }, void 0));
});
