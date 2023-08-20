import React, {
    ReactNode, useEffect, useMemo, useState,
} from 'react';
import { ETheme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext/ThemeContext';
import { useJsonSettings } from '@/entities/User';

interface IThemeProviderProps{
    defaultTheme?:ETheme
    children: ReactNode
}

const ThemeProvider = (props: IThemeProviderProps) => {
    const {
        defaultTheme,
        children,
    } = props;
    const { theme: initialTheme } = useJsonSettings();
    const [isMounted, setIsMounted] = useState(false);
    const [theme, setTheme] = useState<ETheme>(defaultTheme || initialTheme || ETheme.LIGHT);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    useEffect(() => {
        if (!isMounted && initialTheme) {
            setTheme(initialTheme);
            setIsMounted(true);
        }
    }, [initialTheme, isMounted]);
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
