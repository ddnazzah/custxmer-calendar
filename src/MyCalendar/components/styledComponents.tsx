/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-24 07:06:01
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-25 17:29:31
 */

import { SafeAreaView as SafeArea } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const SafeAreaView = styled(SafeArea)(({ theme }) => ({
    flex: 1,
    backgroundColor: theme.BACKGROUND,
}));

export const Container = styled.View(({ theme }) => ({
    flex: 1,
    backgroundColor: theme.SURFACE,
    padding: 20,
}));

export const MonthYearWrapper = styled.TouchableOpacity({});

export const MonthYearText = styled.Text(({ theme }) => ({
    color: theme.ON_SURFACE,
    fontSize: 30,
    fontFamily: 'Sora-Bold',
}));
