import { classNames, TMods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}
export enum ETextAlign{
    RIGHT ='right',
    LEFT ='left',
    CENTER ='center'
}
interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: ETextAlign
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = ETextAlign.LEFT,
    } = props;
    const mods: TMods = {
        [cls[theme]]: true,
        [cls[align]]: true,

    };
    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
