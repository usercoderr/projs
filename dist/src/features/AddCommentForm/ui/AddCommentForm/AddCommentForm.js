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
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from '@/shared/ui/Input/Input';
import { Button, EButtonTheme } from '@/shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { addCommentFormActions, addCommentFormReducer, getAddCommentFormError, getAddCommentFormText, } from '@/features/AddCommentForm';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModalLoader, } from '@/shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import cls from './AddCommentForm.module.scss';
var reducers = {
    addCommentForm: addCommentFormReducer,
};
var AddCommentForm = memo(function (_a) {
    var className = _a.className, onSendComment = _a.onSendComment;
    var t = useTranslation().t;
    var text = useSelector(getAddCommentFormText);
    var error = useSelector(getAddCommentFormError);
    var dispatch = useAppDispatch();
    var onCommentTextChange = useCallback(function (value) {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);
    var onSendHandler = useCallback(function () {
        onSendComment(text);
        onCommentTextChange('');
    }, [onSendComment, onCommentTextChange, text]);
    return (_jsx(DynamicModalLoader, __assign({ reducers: reducers }, { children: _jsxs("div", __assign({ className: classNames(cls.AddCommentForm, {}, [className]) }, { children: [_jsx(Input, { placeholder: t('LeaveComment'), value: text, onChange: onCommentTextChange }), _jsx(Button, __assign({ theme: EButtonTheme.OUTLINE, onClick: onSendHandler }, { children: t('Send') }))] })) })));
});
export default AddCommentForm;
