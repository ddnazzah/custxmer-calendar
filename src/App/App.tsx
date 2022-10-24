/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-24 04:44:18
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-24 05:00:11
 */
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from '../Navigation';

const App = () => {
    return (
        <SafeAreaProvider>
            <Navigator />
        </SafeAreaProvider>
    );
};

export default App;
