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
import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router';
import cls from './ForbiddenPage.module.scss';
var ForbiddenPage = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var navigate = useNavigate();
    useEffect(function () {
        setTimeout(function () {
            navigate('/');
        }, 2000);
    }, [navigate]);
    return (_jsx("div", __assign({ className: classNames(cls.ForbiddenPage, {}, [className]) }, { children: t('access') })));
});
export default ForbiddenPage;
