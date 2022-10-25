/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-24 04:44:18
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-25 18:11:26
 */
import { ThemeContext } from '@shared/hooks/useSettings';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from '../Navigation';
import { InitializationWrapper } from './components';
import { useApp } from './hooks';

const App = () => {
    const { currentTheme, toggleTheme } = useApp();

    return (
        <SafeAreaProvider>
            <ThemeContext.Provider
                value={{ theme: currentTheme, toggleTheme: toggleTheme }}>
                <InitializationWrapper>
                    <Navigator />
                </InitializationWrapper>
            </ThemeContext.Provider>
        </SafeAreaProvider>
    );
};

export default App;
