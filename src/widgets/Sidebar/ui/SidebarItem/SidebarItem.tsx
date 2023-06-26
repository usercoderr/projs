import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ISidebarItemType } from 'widgets/Sidebar/model/items';
import { memo } from 'react';
import cls from './SidebarItem.module.scss';

interface ISidebarItemProps{
    item: ISidebarItemType,
    collapsed: boolean
}
export const SidebarItem = memo(({ item, collapsed }: ISidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <div className={cls.item}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to={item.path}
                className={classNames(cls.link, { [cls.collapsed]: collapsed })}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.linkSpan}>
                    {t(item.text)}
                </span>
            </AppLink>
        </div>
    );
});
