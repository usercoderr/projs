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
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/modal/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../modal/slice/counterSlice';
export var Counter = function () {
    var dispatch = useDispatch();
    var counterValue = useSelector(getCounterValue);
    var increment = function () {
        dispatch(counterActions.increment());
    };
    var decrement = function () {
        dispatch(counterActions.decrement());
    };
    return (_jsxs("div", { children: [_jsx("h1", __assign({ "data-testid": "value-title" }, { children: counterValue }), void 0), _jsx("hr", {}, void 0), _jsx(Button, __assign({ onClick: increment, "data-testid": "increment-btn" }, { children: "Increment" }), void 0), _jsx(Button, __assign({ onClick: decrement, "data-testid": "decrement-btn" }, { children: "Decrement" }), void 0)] }, void 0));
};
