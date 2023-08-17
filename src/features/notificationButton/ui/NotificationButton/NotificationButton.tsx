import React, { memo, useState } from 'react';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';
import NotificationIcon from '@/shared/assets/icons/popUp.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NotificationList } from '@/entities/Notification';
import cls from './NotificationButton.module.scss';
import { Button, EButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Popover } from '@/shared/ui/deprecated/Popups';

interface INotificationButtonProps {
    className?: string
}

export const NotificationButton = memo(({ className }: INotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const onOpenDrawer = () => {
        setIsOpen(true);
    };

    const onCloseDrawer = () => {
        setIsOpen(false);
    };

    const trigger = (
        <Button onClick={onOpenDrawer} theme={EButtonTheme.CLEAR}>
            <Icon width={20} height={20} inverted Svg={NotificationIcon} />
        </Button>
    );
    if (isMobile) {
        return (
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList className={cls.notification} />
                </Drawer>
            </MobileView>
        );
    }
    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>

        </div>
    );
});
