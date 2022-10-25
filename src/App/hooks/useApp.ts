import { useState } from 'react';

export const useApp = () => {
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
    };

    return { currentTheme, toggleTheme };
};
