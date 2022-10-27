/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-06-28 04:19:16
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-12-01 05:45:56
 */

import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Button } from '../';
import TestProvider from '../../../../@testing/Provider';

describe('<Button/>', () => {
    it('renders correctly', () => {
        const { toJSON } = render(
            <TestProvider>
                <Button />
            </TestProvider>,
        );

        expect(toJSON()).toMatchSnapshot();
    });

    it('renders text correctly', () => {
        const { getByText } = render(
            <TestProvider>
                <Button text="My Button" />
            </TestProvider>,
        );

        expect(getByText('My Button')).toBeDefined();
    });

    it('calls onPress', () => {
        const onPress = jest.fn();

        const { getByTestId } = render(
            <TestProvider>
                <Button testID="button" text="Button" onPress={onPress} />
            </TestProvider>,
        );

        const button = getByTestId('button');

        fireEvent.press(button);

        expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('disables', () => {
        const onPress = jest.fn();

        const { getByTestId } = render(
            <TestProvider>
                <Button
                    testID="button"
                    text="Button"
                    onPress={onPress}
                    disabled
                />
            </TestProvider>,
        );

        const button = getByTestId('button');

        fireEvent.press(button);

        expect(onPress).toHaveBeenCalledTimes(0);
    });
});
