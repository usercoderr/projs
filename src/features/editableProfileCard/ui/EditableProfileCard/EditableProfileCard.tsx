import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';
import {
    DynamicModalLoader,
    TReducerList,
} from '@/shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import {
    profileActions,
    profileReducer,
} from '../../model/slice/profileSlice';
import {
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
} from '../../model/selectors/getEditableProfileSelectors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { EValidateProfileError } from '../../model/consts/consts';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { ETextTheme, Text } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/features';
import { ProfileCardDeprecated, ProfileCardRedesigned } from '@/entities/Profile';

interface EditableProfileCardProps {
    className?: string;
    id?: string
}
const reducers: TReducerList = {
    profile: profileReducer,
};
export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const validateErrorTranslates = {
        [EValidateProfileError.SERVER_ERROR]: t('server_error'),
        [EValidateProfileError.NO_DATA]: t('no_data'),
        [EValidateProfileError.INCORRECT_USER_DATA]: t('incorrect_user_data'),
        [EValidateProfileError.INCORRECT_USER_COUNTRY]: t('incorrect_user_country'),
        [EValidateProfileError.INCORRECT_USER_AGE]: t('incorrect_user_age'),
    };
    useEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    }, [dispatch, id]);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: ECurrency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: ECountry) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModalLoader reducers={reducers}>
            <EditableProfileCardHeader />
            {validateErrors?.length && validateErrors.map((err) => (
                <Text
                    key={err}
                    theme={ETextTheme.ERROR}
                    text={validateErrorTranslates[err]}
                    data-testid="EditableProfileCard"
                />
            ))}
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <ProfileCardRedesigned
                        data={formData}
                        isLoading={isLoading}
                        error={error}
                        readonly={readonly}
                        onChangeFirstname={onChangeFirstname}
                        onChangeLastname={onChangeLastname}
                        onChangeAge={onChangeAge}
                        onChangeCity={onChangeCity}
                        onChangeUsername={onChangeUsername}
                        onChangeAvatar={onChangeAvatar}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                    />
                )}
                off={(
                    <ProfileCardDeprecated
                        data={formData}
                        isLoading={isLoading}
                        error={error}
                        readonly={readonly}
                        onChangeFirstname={onChangeFirstname}
                        onChangeLastname={onChangeLastname}
                        onChangeAge={onChangeAge}
                        onChangeCity={onChangeCity}
                        onChangeUsername={onChangeUsername}
                        onChangeAvatar={onChangeAvatar}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                    />
                )}
            />

        </DynamicModalLoader>
    );
});
