import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, EButtonTheme } from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/features';
import { Button } from '@/shared/ui/redesigned/Button';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Button
                    className={classNames('', {}, [className])}
                    onClick={toggle}
                >
                    {t(short ? 'shortLang' : 'Язык')}
                </Button>
            )}
            off={(
                <ButtonDeprecated
                    className={classNames('', {}, [className])}
                    theme={EButtonTheme.CLEAR}
                    onClick={toggle}
                >
                    {t(short ? 'shortLang' : 'Язык')}
                </ButtonDeprecated>
            )}
        />
    );
});
