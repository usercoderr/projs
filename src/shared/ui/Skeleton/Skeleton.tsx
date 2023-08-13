import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface ISkeletonProps {
    className?: string,
    height?: string | number,
    width?: string | number,
    border?: string | number

}

export const Skeleton = memo((props: ISkeletonProps) => {
    const {
        className,
        border,
        height,
        width,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };
    return (

        <div className={classNames(cls.Skeleton, {}, [className])} style={styles} />
    );
});
