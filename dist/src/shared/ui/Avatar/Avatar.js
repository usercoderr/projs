import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import cls from './Avatar.module.scss';
export var Avatar = function (props) {
    var className = props.className, src = props.src, alt = props.alt, size = props.size;
    var t = useTranslation().t;
    var mods = {};
    var styles = useMemo(function () { return ({
        width: size || 100,
        height: size || 100,
    }); }, [size]);
    return (_jsx("img", { src: src, alt: alt, style: styles, className: classNames(cls.Avatar, mods, [className]) }, void 0));
};
