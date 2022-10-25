import React, { PropsWithChildren } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useSettings } from '../../_shared/hooks';

interface Props extends PropsWithChildren<any> {}

const InitializationWrapper = ({ children }: Props) => {
    const { _theme } = useSettings();

    return (
        <ThemeProvider theme={_theme}>
            <StatusBar
                backgroundColor="transparent"
                barStyle="dark-content"
                translucent
            />
            {children}
        </ThemeProvider>
    );
};

export default InitializationWrapper;
