import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

const MockedNavigator = ({
    component,
    params = {},
}: {
    component: React.ComponentType<any>;
    params?: Object;
}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="MockedScreen"
                    component={component}
                    initialParams={params}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MockedNavigator;
