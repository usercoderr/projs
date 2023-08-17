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
import { Dropdown } from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/deprecated/Avatar';

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
    return (
        <Dropdown
            className={classNames(cls.AvatarDropdown, {}, [className])}
            direction="bottom left"
            items={[
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
            ]}
            trigger={(
                <Avatar
                    fallbackInverted
                    src={authData.avatar}
                    size={30}
                />
            )}
        />
    );
});
