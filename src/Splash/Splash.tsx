/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-24 04:39:53
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-25 18:12:34
 */
import { useNavigation } from '@react-navigation/native';
import { Constants } from '@shared/constants';
import { useSettings } from '@shared/hooks';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import {
    CalendarText,
    Container,
    CustxmerText,
} from './components/styledComponents';

const Splash = () => {
    const { _theme } = useSettings();
    const { navigate } = useNavigation<any>();

    useEffect(() => {
        setTimeout(() => {
            navigate(Constants.routes.CALENDAR);
        }, 2000);

        return () => {};
    }, []);

    return (
        <Container colors={['#000000', _theme.PRIMARY, '#111CAF']}>
            <StatusBar hidden />
            <CustxmerText>Custxmer</CustxmerText>
            <CalendarText>Calendar</CalendarText>
        </Container>
    );
};

export default Splash;
