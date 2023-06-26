import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { DynamicModalLoader, TReducerList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
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
                    placeholder="Введите логин"
                />
                <Input
                    onChange={onChangePassword}
                    value={password}
                    type="text"
                    placeholder="Введите пароль"
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
