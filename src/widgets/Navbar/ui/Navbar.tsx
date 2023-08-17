import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import { getRouteArticleCreate } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/features';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { AppLink, EAppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { Button, EButtonTheme } from '@/shared/ui/deprecated/Button';

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
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>

                        {
                            isAuthModal
              && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                        }

                    </header>
                )}
                off={(
                    <header className={classNames(cls.Navbar, {}, [className])}>
                        <Text
                            className={cls.appName}
                            title={t('Usercoder')}
                        />
                        <AppLink
                            theme={EAppLinkTheme.SECONDARY}
                            to={getRouteArticleCreate()}
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
                )}
            />

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
