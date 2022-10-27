/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-06-28 04:19:16
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-27 20:21:35
 */

import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Calendar } from '..';
import TestProvider from '../../../../@testing/Provider';
import { DatesProps } from '../../../types';

describe('<Calendar/>', () => {
    it('renders correctly', () => {
        const props = {
            dates: [
                {
                    date: 4,
                    mood: 'sad',
                },
                {
                    date: 1,
                    mood: 'sad',
                },
                {
                    date: 4,
                    mood: 'happy',
                },
                {
                    date: 6,
                    mood: 'fair',
                },
                {
                    date: 27,
                    mood: 'sad',
                },
            ] as DatesProps,
            month: 9,
            year: 2022,
        };

        render(
            <TestProvider>
                <Calendar calendarProps={props} />
            </TestProvider>,
        );

        expect(screen.toJSON()).toMatchSnapshot();
        expect(screen.getByText('September, 2022')).toBeDefined();
        expect(screen.getByText('30')).toBeDefined();
    });

    it('renders moods correctly', () => {
        const props = {
            dates: [
                {
                    date: 4,
                    mood: 'sad',
                },
                {
                    date: 1,
                    mood: 'sad',
                },
                {
                    date: 4,
                    mood: 'happy',
                },
                {
                    date: 6,
                    mood: 'fair',
                },
                {
                    date: 27,
                    mood: 'sad',
                },
            ] as DatesProps,
            month: 9,
            year: 2022,
        };

        render(
            <TestProvider>
                <Calendar calendarProps={props} />
            </TestProvider>,
        );

        expect(screen.getAllByTestId('happyMood')).toHaveLength(1);
        expect(screen.getAllByTestId('fairMood')).toHaveLength(1);
        expect(screen.getAllByTestId('sadMood')).toHaveLength(2);
    });
});
