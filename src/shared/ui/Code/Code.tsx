import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Icon } from 'shared/ui/Icon/Icon';
import CopyIcon from '../../assets/icons/copy.svg';
import cls from './Code.module.scss';

interface ICodeProps {
    className?: string
    text: string
}

export const Code = memo(({ className, text }: ICodeProps) => {
    const { t } = useTranslation();
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (

        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={EButtonTheme.CLEAR}>
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
