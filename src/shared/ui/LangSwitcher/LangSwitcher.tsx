import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import theme from '@storybook/addon-interactions/dist/ts3.9/theme';
import { Button, EButtonTheme } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LangSwitcherProps {
    className?: string;
    short?:boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={EButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(short ? 'shortLang' : 'Язык')}
        </Button>
    );
});
