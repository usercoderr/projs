import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames, TMods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'readOnly'>

interface IInputProps extends HTMLInputProps {
    className?: string,
    onChange?: (value: string) => void,
    value?: string | number,
    autofocus?: boolean
    readonly?: boolean
    fullWidth?: boolean
}

export const Input = memo((props: IInputProps) => {
    const {
        className,
        children,
        onChange,
        autofocus,
        value,
        type = 'text',
        placeholder,
        fullWidth,
        readonly,
        ...otherProps
    } = props;
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const isCaretVisible = isFocused && !readonly;
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
        setCaretPosition(event.target.value.length);
    };

    const onFocus = () => {
        setIsFocused(true);
    };
    const onBlur = () => {
        setIsFocused(false);
    };

    const onSelect = (event: any) => {
        setCaretPosition(event?.target.selectionStart || 0);
    };

    useEffect(() => {
        if (autofocus) {
            inputRef.current.focus();
            setIsFocused(true);
        }
    }, [autofocus]);

    const mods: TMods = {
        [cls.readonly]: readonly,
        [cls.fullWidth]: fullWidth,
    };
    return (
        <>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}`}
                </div>
            )}
            <div className={fullWidth ? cls.caretWrapperWidth : cls.caretWrapper}>
                <input
                    ref={inputRef}
                    onSelect={onSelect}
                    type={type}
                    readOnly={readonly}
                    onChange={onChangeHandler}
                    value={value}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className={classNames(cls.Input, {}, [className])}
                    {...otherProps}
                >
                    {children}
                </input>
                {
                    isCaretVisible && (
                        <span
                            style={{ left: `${caretPosition * 9}px` }}
                            className={cls.caret}
                        />
                    )
                }
            </div>
        </>
    );
});
