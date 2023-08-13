import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import {
    DynamicModalLoader, TReducerList,
} from '@/shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import {
    getLoginUsername,
} from '../../model/selectors/getLoginUsername/getLoginUsername';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/LoginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

export interface ILoginFormProps {
    className?: string
    onSuccess: () => void
}

const initialReducers: TReducerList = {
    loginForm: loginReducer,
};
const LoginForm = ({ className, onSuccess }: ILoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((val: string) => {
        dispatch(loginActions.setUsername(val));
    }, [dispatch]);
    const onChangePassword = useCallback((val: string) => {
        dispatch(loginActions.setPassword(val));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

    return (
        <DynamicModalLoader
            reducers={initialReducers}
            removeAfterUnmount
        >

            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Input
                    autofocus
                    onChange={onChangeUsername}
                    value={username}
                    type="text"
                    placeholder={t('Введите логин')}
                />
                <Input
                    onChange={onChangePassword}
                    value={password}
                    type="text"
                    placeholder={t('Введите пароль')}
                />
                <Button
                    disabled={isLoading}
                    onClick={onLoginClick}
                    className={cls.loginBtn}
                    theme={EButtonTheme.BACKGROUND_INVERTED}
                >
                    {t('Login')}
                </Button>
            </div>
        </DynamicModalLoader>
    );
};
export default LoginForm;
