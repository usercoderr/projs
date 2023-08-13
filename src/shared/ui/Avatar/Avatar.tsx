import { useTranslation } from 'react-i18next';
import { CSSProperties, useMemo } from 'react';
import { classNames, TMods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface IAvatarProps{
    className?: string
    src?: string,
    alt?: string
    size?:number
}
export const Avatar = (props: IAvatarProps) => {
    const {
        className,
        src,
        alt,
        size,
    } = props;
    const { t } = useTranslation();
    const mods: TMods = {};
    const styles = useMemo <CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);
    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
