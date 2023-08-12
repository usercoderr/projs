import { classNames, TMods } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import cls from './Flex.module.scss';

export type TFlexJustify = 'start' | 'center' | 'between' | 'end'
export type TFlexAlign = 'start' | 'center' | 'end'
export type TFlexDirection = 'row' | 'column'
export type TFlexGap = '4' | '8' | '16' | '32'

const justifyClasses:Record<TFlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    between: cls.justifyBetween,
    end: cls.justifyBetween,
};
const alignClasses:Record<TFlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};
const directionClasses:Record<TFlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};
const gapClasses:Record<TFlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};
export interface IFlexProps {
    className?: string,
    children?: ReactNode,
    justify?:TFlexJustify,
    align?: TFlexAlign,
    direction?: TFlexDirection
    gap?: TFlexGap,
    max?: boolean
}

export const Flex = memo((props: IFlexProps) => {
    const { t } = useTranslation();
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
    } = props;
    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods:TMods = {
        [cls.max]: max,
    };
    return (
        <div className={classNames(cls.Flex, mods, classes)}>
            {children}
        </div>
    );
});
