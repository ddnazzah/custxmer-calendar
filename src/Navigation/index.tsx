/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-24 04:20:57
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-24 05:02:33
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Constants } from '@shared/constants';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MyCalendar } from '../MyCalendar';
import { Splash } from '../Splash';

const MainNavigation = createNativeStackNavigator();

const routes = [
    {
        name: Constants.routes.SPLASH,
        component: Splash,
    },
    {
        name: Constants.routes.CALENDAR,
        component: MyCalendar,
    },
];

const Navigator = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <MainNavigation.Navigator
                    screenOptions={{ headerShown: false }}>
                    {routes.map(route => (
                        <MainNavigation.Screen
                            key={route.name}
                            name={route.name}
                            component={route.component}
                        />
                    ))}
                </MainNavigation.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default Navigator;
