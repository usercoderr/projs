import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import cls from './AvatarDropdown.module.scss';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { ToggleFeatures } from '@/shared/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface IAvatarDropdownProps {
    className?: string
}

export const AvatarDropdown = memo(({ className }: IAvatarDropdownProps) => {
    const { t } = useTranslation();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAdminPanelAvailable = isAdmin || isManager;
    const onLogOut = useCallback(() => {
        dispatch(userActions.logOut());
        navigate('/');
    }, [dispatch, navigate]);

    if (!authData) {
        return null;
    }

    const items = [
        ...(isAdminPanelAvailable ? [{
            content: t('adminPanelPage'),
            href: getRouteAdmin(),
        }] : []),
        {
            content: t('Profile'),

            href: getRouteProfile(authData.id),
        },
        {
            content: t('logOut'),
            onClick: onLogOut,
        },
    ];

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Dropdown
                    className={classNames(cls.AvatarDropdown, {}, [className])}
                    direction="bottom left"
                    items={items}
                    trigger={(
                        <Avatar
                            src={authData.avatar}
                            size={40}
                        />
                    )}
                />
            )}
            off={(
                <DropdownDeprecated
                    className={classNames(cls.AvatarDropdown, {}, [className])}
                    direction="bottom left"
                    items={items}
                    trigger={(
                        <AvatarDeprecated
                            fallbackInverted
                            src={authData.avatar}
                            size={30}
                        />
                    )}
                />
            )}
        />
    );
});
