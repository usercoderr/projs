import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import cls from './Code.module.scss';
import { Icon } from '../Icon';
import { ToggleFeatures } from '@/shared/features';
import { Button, EButtonTheme } from '@/shared/ui/deprecated/Button';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <pre
                    className={classNames(cls.CodeRedesigned, {}, [className])}
                >
                    <Icon
                        clickable
                        onClick={onCopy}
                        className={cls.copyBtn}
                        Svg={CopyIcon}
                    />
                    <code>{text}</code>
                </pre>
            )}
            off={(
                <pre className={classNames(cls.Code, {}, [className])}>
                    <Button
                        onClick={onCopy}
                        className={cls.copyBtn}
                        theme={EButtonTheme.CLEAR}
                    >
                        <CopyIcon className={cls.copyIcon} />
                    </Button>
                    <code>{text}</code>
                </pre>
            )}
        />
    );
});
