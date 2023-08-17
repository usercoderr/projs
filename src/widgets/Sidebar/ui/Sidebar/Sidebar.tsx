import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { ToggleFeatures } from '@/shared/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Button, EButtonSize, EButtonTheme } from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';
import cls from './Sidebar.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const itemsList = sidebarItemsList.map((item) => (
        <SidebarItem
            key={item.path}
            collapsed={collapsed}
            item={item}
        />
    ));

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <aside
                    data-testid="sidebar"
                    className={classNames(cls.SidebarRedesigned, { [cls.collapsedRedesigned]: collapsed }, [className])}
                >
                    <AppLogo className={cls.appLogo} />
                    <VStack gap="8" className={cls.items}>
                        {itemsList}
                    </VStack>
                    <Icon
                        clickable
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={cls.collapsedBtn}
                        Svg={ArrowIcon}
                    />
                    <Icon
                        clickable
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={cls.collapsedBtn}
                        Svg={ArrowIcon}
                    />
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} className={cls.lang} />
                    </div>
                </aside>
            )}
            off={(
                <aside
                    data-testid="sidebar"
                    className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
                >
                    <Button
                        theme={EButtonTheme.BACKGROUND_INVERTED}
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        square
                        size={EButtonSize.L}
                        className={cls.collapsedBtn}
                    >
                        {collapsed ? '>' : '<'}
                    </Button>
                    <VStack gap="8" className={cls.items}>
                        {itemsList}
                    </VStack>
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} className={cls.lang} />
                    </div>
                </aside>
            )}
        />
    );
};
