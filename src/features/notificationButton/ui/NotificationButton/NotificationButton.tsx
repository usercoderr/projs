import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useEffect, useState } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/popUp.svg';
import { NotificationList } from 'entities/Notification';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';
import cls from './NotificationButton.module.scss';

interface INotificationButtonProps {
    className?: string
}

export const NotificationButton = memo(({ className }: INotificationButtonProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const onOpenDrawer = () => {
        setIsOpen(true);
    };

    const onCloseDrawer = () => {
        setIsOpen(false);
    };
    const clickClose = () => {
        setIsOpen(false);
    };
    const trigger = (
        <Button onClick={onOpenDrawer} theme={EButtonTheme.CLEAR}>
            <Icon inverted Svg={NotificationIcon} />
        </Button>
    );
    if (isMobile) {
        return (
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        );
    }

    return (
        <BrowserView>
            <Popover
                className={classNames(cls.NotificationButton, {}, [className])}
                direction="bottom left"
                trigger={trigger}
            >
                <NotificationList className={cls.notifications} />
            </Popover>
        </BrowserView>
    );
});
