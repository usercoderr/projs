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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { DynamicModalLoader, } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { useTranslation } from 'react-i18next';
import { fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions, ProfileCard, profileReducer, } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { EValidateProfileError } from 'entities/Profile/model/types/profile';
var reducers = {
    profile: profileReducer,
};
var ProfilePage = function (_a) {
    var _b;
    var className = _a.className;
    var t = useTranslation('profile').t;
    var dispatch = useAppDispatch();
    var formData = useSelector(getProfileForm);
    var error = useSelector(getProfileError);
    var isLoading = useSelector(getProfileIsLoading);
    var readonly = useSelector(getProfileReadonly);
    var validateErrors = useSelector(getProfileValidateErrors);
    var validateErrorTranslates = (_b = {},
        _b[EValidateProfileError.SERVER_ERROR] = t('server_error'),
        _b[EValidateProfileError.NO_DATA] = t('no_data'),
        _b[EValidateProfileError.INCORRECT_USER_DATA] = t('incorrect_user_data'),
        _b[EValidateProfileError.INCORRECT_USER_COUNTRY] = t('incorrect_user_country'),
        _b[EValidateProfileError.INCORRECT_USER_AGE] = t('incorrect_user_age'),
        _b);
    useEffect(function () {
        dispatch(fetchProfileData());
    }, [dispatch]);
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
    return (_jsx(DynamicModalLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsxs(_Fragment, { children: [_jsx(ProfilePageHeader, {}, void 0), (validateErrors === null || validateErrors === void 0 ? void 0 : validateErrors.length) && validateErrors.map(function (err) { return (_jsx(Text, { theme: TextTheme.ERROR, text: validateErrorTranslates[err] }, err)); }), _jsx(ProfileCard, { data: formData, isLoading: isLoading, error: error, readonly: readonly, onChangeFirstname: onChangeFirstname, onChangeLastname: onChangeLastname, onChangeAge: onChangeAge, onChangeCity: onChangeCity, onChangeUsername: onChangeUsername, onChangeAvatar: onChangeAvatar, onChangeCurrency: onChangeCurrency, onChangeCountry: onChangeCountry }, void 0)] }, void 0) }), void 0));
};
export default ProfilePage;
