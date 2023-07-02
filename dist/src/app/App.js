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
import { Suspense, useEffect, useState } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User/model/slices/userSlice';
import { getUserMounted } from 'entities/User/model/selectors/getUserMounted/getUserMounted';
import { AppRouter } from 'app/providers/router';
function App() {
    var theme = useTheme().theme;
    var dispatch = useDispatch();
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var mounted = useSelector(getUserMounted);
    useEffect(function () {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (_jsx("div", __assign({ className: classNames('app', {}, [theme]) }, { children: _jsxs(Suspense, __assign({ fallback: "" }, { children: [_jsx(Navbar, {}, void 0), _jsxs("div", __assign({ className: "content-page" }, { children: [_jsx(Sidebar, {}, void 0), mounted && _jsx(AppRouter, {}, void 0)] }), void 0)] }), void 0) }), void 0));
}
export default App;
