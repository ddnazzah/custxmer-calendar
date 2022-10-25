import React, { useContext } from 'react';
import { Constants } from '../constants';
import { Theme } from '../types';

export const ThemeContext = React.createContext<{
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}>({ theme: 'dark', toggleTheme: () => null });

export const useSettings = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const _theme: Theme =
        theme === 'light' ? Constants.ui.theme.light : Constants.ui.theme.dark;

    return { theme, toggleTheme, _theme };
};
