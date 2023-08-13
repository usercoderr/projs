import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions, 
} from '@/entities/User';
import cls from './AvatarDropdown.module.scss';
import { RoutePath } from '@/shared/const/router';

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
    );
});
