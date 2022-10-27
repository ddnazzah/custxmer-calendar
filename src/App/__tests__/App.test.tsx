import { render, screen } from '@testing-library/react-native';
import React from 'react';
import TestProvider from '../../@testing/Provider';
import App from '../App';
import { InitializationWrapper } from '../components';

describe('App', () => {
    it('renders correctly', () => {
        render(
            <TestProvider>
                <App />
            </TestProvider>,
        );

        expect(screen.toJSON()).toMatchSnapshot();
    });

    it('renders initializationWrapper correctly', () => {
        render(
            <TestProvider>
                <InitializationWrapper />
            </TestProvider>,
        );

        expect(screen.toJSON()).toMatchSnapshot();
    });
});
