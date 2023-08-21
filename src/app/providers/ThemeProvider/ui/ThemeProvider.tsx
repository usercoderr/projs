import React, {
    ReactNode, useEffect, useMemo, useState,
} from 'react';
import { ETheme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext/ThemeContext';

interface IThemeProviderProps{
    defaultTheme?:ETheme
    children: ReactNode
}

const ThemeProvider = (props: IThemeProviderProps) => {
    const {
        defaultTheme,
        children,
    } = props;
    const [isMounted, setIsMounted] = useState(false);
    const [theme, setTheme] = useState<ETheme>(defaultTheme || ETheme.LIGHT);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    useEffect(() => {
        if (!isMounted && defaultTheme) {
            setTheme(defaultTheme);
            setIsMounted(true);
        }
    }, [defaultTheme, isMounted]);
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
