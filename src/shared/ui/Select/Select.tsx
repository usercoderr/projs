import { classNames, TMods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface ISelectOptions<T extends string> {
    value: T,
    content: string
}

interface ISelectProps<T extends string> {
    className?: string
    label?: string
    options?: ISelectOptions<T>[],
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select = <T extends string>(props: ISelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);
    const mods: TMods = {};

    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {
                label
                && <span className={cls.label}>{label}</span>
            }
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
};
