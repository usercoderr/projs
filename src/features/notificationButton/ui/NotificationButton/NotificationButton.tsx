import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/popUp.svg';
import { NotificationList } from 'entities/Notification';
import cls from './NotificationButton.module.scss';

interface INotificationButtonProps {
    className?: string
}

export const NotificationButton = memo(({ className }: INotificationButtonProps) => {
    const { t } = useTranslation();
    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction="bottom left"
            trigger={(
                <Button theme={EButtonTheme.CLEAR}>
                    <Icon inverted Svg={NotificationIcon} />
                </Button>
            )}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
