import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, EButtonTheme } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { Text } from '@/shared/ui/Text/Text';
import { AppLink, EAppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import { RoutePath } from '@/shared/const/router';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

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
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>

                {
                    isAuthModal
                    && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                }

            </header>

        );
    }
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text
                className={cls.appName}
                title={t('Usercoder')}
            />
            <Button
                className={cls.actions}
                onClick={onShowModal}
                theme={EButtonTheme.CLEAR_INVERTED}
            >
                {t('logIn')}
            </Button>
            {
                isAuthModal
                && (
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                    />
                )
            }

        </header>
    );
};
