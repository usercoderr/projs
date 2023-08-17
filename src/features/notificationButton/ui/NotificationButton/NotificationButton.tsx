import React, { memo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import NotificationIconDeprecated from '@/shared/assets/icons/popUp.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NotificationList } from '@/entities/Notification';
import cls from './NotificationButton.module.scss';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Button as ButtonDeprecated, EButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { ToggleFeatures } from '@/shared/features';
import { Popover } from '@/shared/ui/redesigned/Popups';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
            }
            off={(
                <ButtonDeprecated
                    onClick={onOpenDrawer}
                    theme={EButtonTheme.CLEAR}
                >
                    <IconDeprecated Svg={NotificationIconDeprecated} inverted />
                </ButtonDeprecated>
            )}
        />
    );

    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={(
                        <Popover
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </Popover>
                    )}
                    off={(
                        <PopoverDeprecated
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </PopoverDeprecated>
                    )}
                />
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
