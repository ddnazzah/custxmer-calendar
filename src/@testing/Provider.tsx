import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useSettings } from '../_shared/hooks/useSettings';

interface ITestProviders {
    children: React.ReactNode;
}

interface ITestThemeProvider {
    children: React.ReactNode;
}

export const TestThemeProvider = ({ children }: ITestThemeProvider) => {
    const { _theme } = useSettings();
    return <ThemeProvider theme={_theme}>{children}</ThemeProvider>;
};

const TestProvider = ({ children }: ITestProviders) => {
    return <TestThemeProvider>{children}</TestThemeProvider>;
};

export default TestProvider;
