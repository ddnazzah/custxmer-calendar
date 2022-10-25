/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-02-24 02:31:16
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-25 15:41:48
 */

import React from 'react';
import { StyleProp, TextStyle, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { Constants } from '../../constants';

export interface Props extends TouchableOpacityProps {
    text?: string;
    textStyle?: StyleProp<TextStyle>;
    iconStyle?: StyleProp<TextStyle>;
    icon?: string;
    iconOnly?: boolean;
    iconColor?: string;
    textColor?: string;
    textSize?: number;
    iconSize?: number;
    useImage?: React.ReactElement;
    backgroundColor?: string;
    secondary?: boolean;
    icoMoonJson?: string;
}

const Button = (props: Props) => {
    const {
        style,
        text,
        textColor,
        textSize,
        textStyle,
        disabled,
        onPress,
        backgroundColor,
        secondary,
        activeOpacity,
        children,
        ...rest
    } = props;

    const RenderText = () => (
        <ButtonText color={textColor} textSize={textSize} style={textStyle}>
            {text}
        </ButtonText>
    );

    return (
        <Wrapper
            style={style}
            disabled={disabled}
            backgroundColor={backgroundColor}
            activeOpacity={disabled ? 1 : activeOpacity ?? 0.5}
            onPress={disabled ? undefined : onPress}
            secondary={secondary}
            {...rest}>
            {children ? children : <RenderText />}
        </Wrapper>
    );
};

Button.defaultProps = {
    iconSize: 20,
    disabled: false,
    iconSet: 'Ionicons',
};

export default Button;

const Wrapper = styled.TouchableOpacity<{
    disabled?: boolean | null;
    backgroundColor?: string;
    secondary?: boolean;
}>(({ disabled, backgroundColor, theme }) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 5,
    opacity: disabled ? 0.7 : 1,
    backgroundColor: backgroundColor ? backgroundColor : theme.PRIMARY,
}));

const ButtonText = styled.Text<{ color?: string; textSize?: number }>(
    ({ color, textSize }) => ({
        fontSize: textSize ?? 15,
        color: color || Constants.ui.theme.common.WHITE,
    }),
);
