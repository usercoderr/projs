import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Fragment, memo } from 'react';
import { CommentItem, IComment } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentList.module.scss';

interface ICommentListProps {
    className?: string
    comments?:IComment[],
    isLoading?:boolean
}

export const CommentList = memo(
    (props: ICommentListProps) => {
        const { className, comments, isLoading } = props;
        const { t } = useTranslation();
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
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
            </div>
        );
    },
);
