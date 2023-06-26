import { classNames, TMods } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface IModalProps {
    className?: string
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
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

    const [isClosing, setIsClosing] = useState<boolean>(false);

    const [isMounted, setIsMounted] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout> | null >(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);
    const onContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout();
        };
    }, [isOpen, onKeyDown]);

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
                <div onClick={closeHandler} className={cls.overlay}>
                    <div onClick={(event) => onContentClick(event)} className={cls.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
