import { render, screen } from '@testing-library/react-native';
import React from 'react';
import Navigation from '..';
import TestProvider from '../../@testing/Provider';

describe('Navigation', () => {
    it('renders correctly', () => {
        render(
            <TestProvider>
                <Navigation />
            </TestProvider>,
        );

        expect(screen.toJSON()).toMatchSnapshot();
    });
});
