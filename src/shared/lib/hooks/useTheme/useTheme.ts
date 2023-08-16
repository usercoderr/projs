import { useContext } from 'react';
import { ETheme } from '@/shared/const/theme';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';

interface UseThemeResult {
    toggleTheme: (saveActions: (theme: ETheme) => void) => void;
    theme: ETheme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveActions: (theme: ETheme) => void) => {
        let newTheme: ETheme;
        switch (theme) {
        case ETheme.DARK:
            newTheme = ETheme.LIGHT;
            break;
        case ETheme.LIGHT:
            newTheme = ETheme.ORANGE;
            break;
        case ETheme.ORANGE:
            newTheme = ETheme.DARK;
            break;
        default:
            newTheme = ETheme.LIGHT;
        }
        setTheme?.(newTheme);
        saveActions?.(newTheme);
    };

    return {
        theme: theme || ETheme.LIGHT,
        toggleTheme,
    };
}
