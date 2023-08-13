import React, {
    ReactNode, useMemo, useState,
} from 'react';
import { ETheme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { ThemeContext } from '@/shared/lib/context/ThemeContext/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.LIGHT;
interface IThemeProviderProps{
    defaultTheme?:ETheme
    children: ReactNode
}
const ThemeProvider = (props: IThemeProviderProps) => {
    const {
        defaultTheme,
        children,
    } = props;

    const [theme, setTheme] = useState<ETheme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
