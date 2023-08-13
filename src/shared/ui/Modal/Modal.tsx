import React, { ReactNode } from 'react';
import { classNames, TMods } from '@/shared/lib/classNames/classNames';
import { Portal } from '@/shared/ui/Portal';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Modal.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface IModalProps {
    className?: string
    children?: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
    lazy?: boolean
}
const ANIMATION_DELAY = 500;
export const Modal = (props: IModalProps) => {
    const {
        className,
        children,
        isOpen,
        lazy,
        onClose,
    } = props;
    const { theme } = useTheme();
    const { isClosing, close, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY, isOpen, onClose,
    });
    const mods: TMods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };
    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>

    );
};
