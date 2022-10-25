/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-24 04:39:53
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-25 18:12:34
 */
import { useSettings } from '@shared/hooks';
import React from 'react';
import { StatusBar } from 'react-native';
import {
    CalendarText,
    Container,
    CustxmerText,
} from './components/styledComponents';

const Splash = () => {
    const { _theme } = useSettings();

    return (
        <Container colors={['#000000', _theme.PRIMARY, '#111CAF']}>
            <StatusBar hidden />
            <CustxmerText>Custxmer</CustxmerText>
            <CalendarText>Calendar</CalendarText>
        </Container>
    );
};

export default Splash;
