import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { NotificationItem } from 'entities/Notification/ui/NotificationItem/NotificationItem';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './NotificationList.module.scss';
import { useNotifications } from '../../api/notificationApi';

interface INotificationListProps {
    className?: string
}

export const NotificationList = memo(({ className }: INotificationListProps) => {
    const { t } = useTranslation();
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack
                gap="16"
                max
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />

            </VStack>
        );
    }
    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((item) => (
                <NotificationItem
                    key={item.id}
                    item={item}
                />
            ))}

        </VStack>
    );
});
