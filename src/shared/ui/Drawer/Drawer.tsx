import { classNames, TMods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';

interface IDrawerProps {
    className?: string,
    children: ReactNode,
    isOpen?: boolean,
    onClose?:() => void
}

export const Drawer = memo((props: IDrawerProps) => {
    const { t } = useTranslation();
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;
    const { theme } = useTheme();

    const mods: TMods = {
        [cls.opened]: isOpen,
    };
    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});