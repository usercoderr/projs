import { classNames, TMods } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';

interface IDrawerProps {
    className?: string,
    children: ReactNode,
    isOpen?: boolean,
    lazy?: boolean,
    onClose?:() => void
}

export const Drawer = memo((props: IDrawerProps) => {
    const {
        className,
        children,
        lazy,
        isOpen,
        onClose,
    } = props;
    const { theme } = useTheme();
    const {
        isClosing,
        close,
        isMounted,
    } = useModal({
        animationDelay: 300,
        isOpen,
        onClose,
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
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});
