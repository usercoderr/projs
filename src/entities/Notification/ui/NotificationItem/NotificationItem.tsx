import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Card, ECardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { INotification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface INotificationListProps {
    className?: string,
    item: INotification
}

export const NotificationItem = memo((props: INotificationListProps) => {
    const { t } = useTranslation();
    const { className, item } = props;
    const content = (
        <Card
            theme={ECardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <a
                className={cls.link}
                target="_blank"
                href={item.href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return content;
});
