import { useContext } from 'react';
import { ETheme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: ETheme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
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
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || ETheme.LIGHT,
        toggleTheme,
    };
}
