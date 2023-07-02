import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import cls from './Icon.module.scss';

interface IIconProps {
    className?: string
    Svg:React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo(({ className, Svg }: IIconProps) => (
    <Svg className={classNames(cls.Icon, {}, [className])} />
));
