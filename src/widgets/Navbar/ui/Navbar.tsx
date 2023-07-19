import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User/model/slices/userSlice';
import { getUserAuthData } from 'entities/User';
import { useNavigate } from 'react-router';
import { Text } from 'shared/ui/Text/Text';
import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authData = useSelector(getUserAuthData);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logOut());
        navigate('/');
    }, [dispatch, navigate]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Usercoder')}
                />
                <AppLink
                    theme={EAppLinkTheme.SECONDARY}
                    to={RoutePath.article_create}
                    className={cls.createBtn}
                >
                    {t('create')}
                </AppLink>
                <div className={cls.links}>
                    <Button
                        onClick={onLogOut}
                        theme={EButtonTheme.CLEAR_INVERTED}
                    >
                        LogOut
                    </Button>
                </div>
                {
                    isAuthModal
                    && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                }

            </header>

        );
    }
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    onClick={onShowModal}
                    theme={EButtonTheme.CLEAR_INVERTED}
                >
                    LogIn
                </Button>
            </div>
            {
                isAuthModal
                && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            }

        </header>
    );
};
