/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-27 18:08:55
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-27 19:02:33
 */

import { render, screen } from '@testing-library/react-native';
import React from 'react';
import TestProvider from '../../@testing/Provider';
import Splash from '../Splash';

describe('Splash', () => {
    it('renders correctly', () => {
        render(
            <TestProvider>
                <Splash />
            </TestProvider>,
        );

        expect(screen.toJSON()).toMatchSnapshot();
    });

    it('renders text correctly', () => {
        render(
            <TestProvider>
                <Splash />
            </TestProvider>,
        );

        expect(screen.getByText('Custxmer')).toBeDefined();
        expect(screen.getByText('Calendar')).toBeDefined();
    });

    // it('navigates to MyCalendar', () => {
    //     render(
    //         <TestProvider>
    //             <Splash />
    //         </TestProvider>,
    //     );

    //     sleep(3);

    //     expect(screen.getByTestId('myCalendar')).toBeDefined();
    // });
});
