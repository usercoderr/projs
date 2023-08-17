import React, { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-dark.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Button as ButtonDeprecated, EButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeatures } from '@/shared/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();
    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Icon
                    clickable
                    onClick={onToggleHandler}
                    Svg={ThemeIcon}
                    width={40}
                    height={40}
                />
            )}
            off={(
                <ButtonDeprecated
                    theme={EButtonTheme.CLEAR}
                    className={classNames('', {}, [className])}
                    onClick={onToggleHandler}
                >
                    <IconDeprecated Svg={ThemeIconDeprecated} width={40} height={40} inverted />
                </ButtonDeprecated>
            )}
        />
    );
};
