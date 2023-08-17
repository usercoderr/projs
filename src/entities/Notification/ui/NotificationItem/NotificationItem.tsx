import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { INotification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';
import { Card as CardDeprecated, ECardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface INotificationListProps {
    className?: string,
    item: INotification
}

export const NotificationItem = memo((props: INotificationListProps) => {
    const { t } = useTranslation();
    const { className, item } = props;
    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Card
                    className={classNames(cls.NotificationItem, {}, [className])}
                >
                    <Text title={item.title} text={item.description} />
                </Card>
            )}
            off={(
                <CardDeprecated
                    theme={ECardTheme.OUTLINED}
                    className={classNames(cls.NotificationItem, {}, [className])}
                >
                    <TextDeprecated title={item.title} text={item.description} />
                </CardDeprecated>
            )}
        />

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
