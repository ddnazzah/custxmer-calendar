import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import TestProvider from '../../@testing/Provider';
import MyCalendar from '../MyCalendar';

describe('MyCalendar', () => {
    it('renders correctly', () => {
        render(
            <TestProvider>
                <MyCalendar />
            </TestProvider>,
        );

        expect(screen.toJSON()).toMatchSnapshot();
    });

    it('renders calendar', () => {
        render(
            <TestProvider>
                <MyCalendar />
            </TestProvider>,
        );

        expect(screen.getByTestId('calendar')).toBeDefined();
    });

    it('toggles theme', () => {
        render(
            <TestProvider>
                <MyCalendar />
            </TestProvider>,
        );

        fireEvent.press(screen.getByTestId('themeToggleBtn'));

        expect(screen.getByTestId('lightModeIcon')).toBeDefined();

        fireEvent.press(screen.getByTestId('themeToggleBtn'));

        expect(screen.getByTestId('lightModeIcon')).toBeDefined();
    });
});
