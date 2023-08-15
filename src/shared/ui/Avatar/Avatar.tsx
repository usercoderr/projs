import { useTranslation } from 'react-i18next';
import { CSSProperties, useMemo } from 'react';
import { classNames, TMods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/user-avatar.svg';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';

interface IAvatarProps{
    className?: string
    src?: string,
    alt?: string
    size?:number
    fallbackInverted?: boolean
}
export const Avatar = (props: IAvatarProps) => {
    const {
        className,
        src,
        alt,
        size = 100,
        fallbackInverted,
    } = props;
    const { t } = useTranslation();
    const mods: TMods = {};
    const styles = useMemo <CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);
    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            Svg={UserIcon}
        />
    );
    const fallback = (
        <Skeleton
            width={size}
            height={size}
            border="50%"
        />
    );
    return (
        <AppImage
            src={src}
            alt={alt}
            style={styles}
            fallback={fallback}
            errorFallback={errorFallback}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
