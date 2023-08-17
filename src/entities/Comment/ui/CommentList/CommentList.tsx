import { useTranslation } from 'react-i18next';
import { Fragment, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { IComment } from '../../model/types/comment';
import { CommentItem } from '../CommentItem/CommentItem';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/deprecated/Text';

interface ICommentListProps {
    className?: string
    comments?:IComment[],
    isLoading?:boolean
}

export const CommentList = memo(
    (props: ICommentListProps) => {
        const { className, comments, isLoading } = props;
        const { t } = useTranslation();

        if (isLoading) {
            return (
                <VStack gap="16" max className={classNames('', {}, [className])}>
                    <CommentItem isLoading />
                    <CommentItem isLoading />
                    <CommentItem isLoading />
                </VStack>
            );
        }
        return (
            <VStack gap="16" className={classNames('', {}, [className])}>
                {comments?.length
                    ? comments.map((comment) => (
                        <Fragment key={comment.id}>
                            <CommentItem
                                isLoading={isLoading}
                                className={cls.comment}
                                comment={comment}
                            />
                        </Fragment>
                    )) : <Text text={t('commentsNotFound')} />}
            </VStack>
        );
    },
);
