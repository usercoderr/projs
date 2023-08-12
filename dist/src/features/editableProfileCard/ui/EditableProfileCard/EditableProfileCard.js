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
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { ProfileCard } from '@/entities/Profile';
import { DynamicModalLoader, } from '@/shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { profileActions, profileReducer, } from '../../model/slice/profileSlice';
import { getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, } from '../../model/selectors/getEditableProfileSelectors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { EValidateProfileError } from '../../model/consts/consts';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
var reducers = {
    profile: profileReducer,
};
export var EditableProfileCard = memo(function (props) {
    var _a;
    var className = props.className, id = props.id;
    var t = useTranslation('profile').t;
    var dispatch = useAppDispatch();
    var formData = useSelector(getProfileForm);
    var error = useSelector(getProfileError);
    var isLoading = useSelector(getProfileIsLoading);
    var readonly = useSelector(getProfileReadonly);
    var validateErrors = useSelector(getProfileValidateErrors);
    var validateErrorTranslates = (_a = {},
        _a[EValidateProfileError.SERVER_ERROR] = t('server_error'),
        _a[EValidateProfileError.NO_DATA] = t('no_data'),
        _a[EValidateProfileError.INCORRECT_USER_DATA] = t('incorrect_user_data'),
        _a[EValidateProfileError.INCORRECT_USER_COUNTRY] = t('incorrect_user_country'),
        _a[EValidateProfileError.INCORRECT_USER_AGE] = t('incorrect_user_age'),
        _a);
    useEffect(function () {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    }, [dispatch, id]);
    var onChangeFirstname = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ firstname: value || '' }));
    }, [dispatch]);
    var onChangeLastname = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);
    var onChangeAge = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);
    var onChangeCity = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);
    var onChangeUsername = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);
    var onChangeAvatar = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);
    var onChangeCurrency = useCallback(function (currency) {
        dispatch(profileActions.updateProfile({ currency: currency }));
    }, [dispatch]);
    var onChangeCountry = useCallback(function (country) {
        dispatch(profileActions.updateProfile({ country: country }));
    }, [dispatch]);
    return (_jsxs(DynamicModalLoader, __assign({ reducers: reducers }, { children: [_jsx(EditableProfileCardHeader, {}), (validateErrors === null || validateErrors === void 0 ? void 0 : validateErrors.length) && validateErrors.map(function (err) { return (_jsx(Text, { theme: TextTheme.ERROR, text: validateErrorTranslates[err], "data-testid": "EditableProfileCard" }, err)); }), _jsx(ProfileCard, { data: formData, isLoading: isLoading, error: error, readonly: readonly, onChangeFirstname: onChangeFirstname, onChangeLastname: onChangeLastname, onChangeAge: onChangeAge, onChangeCity: onChangeCity, onChangeUsername: onChangeUsername, onChangeAvatar: onChangeAvatar, onChangeCurrency: onChangeCurrency, onChangeCountry: onChangeCountry })] })));
});
