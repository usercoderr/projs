import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User/model/slices/userSlice';
import { getUserAuthData, isUserAdmin, isUserManager } from 'entities/User';
import { useNavigate } from 'react-router';
import { Text } from 'shared/ui/Text/Text';
import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/DropDown/DropDown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
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
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const isAdminPanelAvailable = isAdmin || isManager;
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
                    <Dropdown
                        direction="bottom left"
                        className={cls.dropdown}
                        items={[
                            ...(isAdminPanelAvailable ? [{
                                content: t('adminPanelPage'),
                                href: RoutePath.admin_panel,
                            }] : []),
                            {
                                content: t('Profile'),
                                href: RoutePath.profile + authData.id,
                            },
                            {
                                content: t('logOut'),
                                onClick: onLogOut,
                            },
                        ]}
                        trigger={(
                            <Avatar
                                src={authData.avatar}
                                size={30}
                            />
                        )}
                    />
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
                    {t('logIn')}
                </Button>
            </div>
            {
                isAuthModal
                && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            }

        </header>
    );
};
