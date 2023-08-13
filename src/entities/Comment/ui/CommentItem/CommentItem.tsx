import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { IComment } from '@/entities/Comment';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import cls from './CommentItem.module.scss';
import { RoutePath } from '@/shared/const/router';

interface ICommentItemProps {
    className?: string
    comment?: IComment
    isLoading?: boolean

}

export const CommentItem = memo((props: ICommentItemProps) => {
    const { className, comment, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack
                gap="8"
                max
                className={classNames(cls.CommentItem, {}, [className, cls.loading])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </VStack>
        );
    }
    if (!comment) {
        return null;
    }
    return (
        <VStack gap="8" max className={classNames(cls.CommentItem, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {
                    comment.user?.avatar
                    && <Avatar size={30} src={comment.user?.avatar} />
                }
                <Text className={cls.username} title={comment.user?.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    );
});
