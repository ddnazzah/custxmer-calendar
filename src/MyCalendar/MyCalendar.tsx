/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-24 04:39:53
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-25 18:12:24
 */
import DarkMode from '@shared/assets/vectors/darkmode.svg';
import LightMode from '@shared/assets/vectors/lightmode.svg';
import { Button } from '@shared/components/Button';
import { Calendar } from '@shared/components/Calendar';
import { useSettings } from '@shared/hooks';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Container, SafeAreaView } from './components/styledComponents';
import { useMyCalendar } from './hooks';

const MyCalendar = () => {
    const { calendarProps } = useMyCalendar();
    const { theme, toggleTheme } = useSettings();

    return (
        <SafeAreaView>
            <Container>
                <StatusBar hidden={false} />
                <Button
                    onPress={toggleTheme}
                    backgroundColor="transparent"
                    style={styles.toggleModeButton}>
                    {theme === 'dark' ? (
                        <LightMode height="25" />
                    ) : (
                        <DarkMode height="25" />
                    )}
                </Button>
                <Calendar calendarProps={calendarProps} />
            </Container>
        </SafeAreaView>
    );
};

export default MyCalendar;

const styles = StyleSheet.create({
    toggleModeButton: {
        width: 50,
        alignSelf: 'flex-end',
    },
});
