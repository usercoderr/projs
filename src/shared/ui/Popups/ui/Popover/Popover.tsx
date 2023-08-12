import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { TDropDownDirection } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/classNames/classNames';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface IPopoverProps {
    className?: string,
    direction?: TDropDownDirection
    trigger: ReactNode
    children: ReactNode
}

export function Popover(props: IPopoverProps) {
    const {
        className,
        trigger,
        children,
        direction = 'bottom right',
    } = props;
    const menuClasses = [mapDirectionClass[direction]];
    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>

            <HPopover.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
