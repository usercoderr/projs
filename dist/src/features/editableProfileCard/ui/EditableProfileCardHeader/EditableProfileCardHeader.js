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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { Button, EButtonTheme } from '@/shared/ui/Button/Button';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileData, getProfileReadonly, } from '../../model/selectors/getEditableProfileSelectors';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
export var EditableProfileCardHeader = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var readonly = useSelector(getProfileReadonly);
    var authData = useSelector(getUserAuthData);
    var profileData = useSelector(getProfileData);
    var canEdit = (authData === null || authData === void 0 ? void 0 : authData.id) === (profileData === null || profileData === void 0 ? void 0 : profileData.id);
    var dispatch = useAppDispatch();
    var onEdit = useCallback(function () {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    var onCancelEdit = useCallback(function () {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    var onSave = useCallback(function () {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (_jsxs(HStack, __assign({ max: true, justify: "between", className: classNames('', {}, [className]) }, { children: [_jsx(Text, { text: t('Profile') }), canEdit && (_jsx(_Fragment, { children: readonly ? (_jsx(Button, __assign({ theme: EButtonTheme.OUTLINE, onClick: onEdit, "data-testid": "EditableProfileCardHeader.EditBtn" }, { children: t('Edit') }))) : (_jsxs(HStack, __assign({ gap: "8" }, { children: [_jsx(Button, __assign({ theme: EButtonTheme.OUTLINE_RED, onClick: onCancelEdit, "data-testid": "EditableProfileCardHeader.CancelBtn" }, { children: t('Cancel') })), _jsx(Button, __assign({ theme: EButtonTheme.OUTLINE, onClick: onSave, "data-testid": "EditableProfileCardHeader.SaveBtn" }, { children: t('Save') }))] }))) }))] })));
});
