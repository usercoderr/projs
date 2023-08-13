import { createContext } from 'react';
import { ETheme } from '@/shared/const/theme';

export interface ThemeContextProps {
    theme?: ETheme;
    setTheme?: (theme: ETheme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
