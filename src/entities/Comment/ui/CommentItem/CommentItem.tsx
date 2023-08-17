import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { IComment } from '@/entities/Comment';
import cls from './CommentItem.module.scss';
import { getRouteProfile } from '@/shared/const/router';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/deprecated/Text';

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
            <AppLink to={getRouteProfile(comment.user?.id)} className={cls.header}>
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
