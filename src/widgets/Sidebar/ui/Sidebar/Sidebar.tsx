import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, EButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                theme={EButtonTheme.BACKGROUND_INVERTED}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                square
                size={ButtonSize.L}
                className={cls.collapsedBtn}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {
                    SidebarItemsList.map((item) => (
                        <SidebarItem
                            key={item.path}
                            collapsed={collapsed}
                            item={item}
                        />
                    ))
                }

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
