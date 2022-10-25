/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-24 06:07:56
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-24 06:40:57
 */

import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient)({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
});

export const CustxmerText = styled.Text(({ theme }) => ({
    color: theme.ON_PRIMARY,
    fontSize: 36,
    letterSpacing: 1,
}));

export const CalendarText = styled.Text(({ theme }) => ({
    color: theme.ON_PRIMARY,
    fontSize: 36,
    letterSpacing: 1,
}));
