import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useState } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/popUp.svg';
import { NotificationList } from 'entities/Notification';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
import cls from './NotificationButton.module.scss';

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
            <Icon inverted Svg={NotificationIcon} />
        </Button>
    );
    if (isMobile) {
        return (
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList className={cls.notification} />
                    </Drawer>
                </AnimationProvider>
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
