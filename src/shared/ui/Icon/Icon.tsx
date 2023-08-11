import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import cls from './Icon.module.scss';

interface IIconProps {
    className?: string
    Svg:React.VFC<React.SVGProps<SVGSVGElement>>
    inverted?: boolean
}

export const Icon = memo((props: IIconProps) => {
    const { className, Svg, inverted } = props;
    return (
        <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />

    );
});
