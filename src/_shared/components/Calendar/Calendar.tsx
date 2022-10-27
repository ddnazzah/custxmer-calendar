/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-24 07:43:42
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-27 19:36:44
 */

import { DatesProps } from '@shared/types';
import { getDay } from 'date-fns';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import React, { Fragment } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import useCalendar from './hooks/useCalendar';

interface Props {
    calendarProps: {
        month: number;
        year: number;
        dates: DatesProps;
    };
    testID?: string;
}

const Calendar = (props: Props) => {
    const { calendarProps, testID } = props;
    const { nameOfDays, newDays, renderMood, currentDate } =
        useCalendar(calendarProps);

    return (
        <Container testID={testID}>
            <MonthYearWrapper>
                <MonthYearText>
                    {format(currentDate, 'MMMM, yyyy')}
                </MonthYearText>
            </MonthYearWrapper>
            <DaysNameWrapper>
                {nameOfDays.map(name => (
                    <DayNameText key={name}>{name}</DayNameText>
                ))}
            </DaysNameWrapper>
            <DayRow>
                {newDays.map((day, dayIdx) => (
                    <Fragment key={dayIdx}>
                        {dayIdx === 0 && (
                            <DayShifter shiftIndex={getDay(day)} />
                        )}
                        <DayWrapper>
                            {renderMood(Number(format(day, 'd')))}
                            <DayText _isToday={isToday(day)}>
                                {Number(format(day, 'd'))}
                            </DayText>
                        </DayWrapper>
                    </Fragment>
                ))}
            </DayRow>
        </Container>
    );
};

export default Calendar;

const { width } = Dimensions.get('window');

const Container = styled.View({
    flex: 1,
});

const MonthYearWrapper = styled.TouchableOpacity({});

const MonthYearText = styled.Text(({ theme }) => ({
    color: theme.ON_SURFACE,
    fontSize: 30,
    fontFamily: 'Sora-Bold',
}));

const DaysNameWrapper = styled.View({
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
});

const DayNameText = styled.Text(({ theme }) => ({
    color: theme.ON_SURFACE,
    fontSize: 18,
    fontFamily: 'Sora-Medium',
}));

const DayRow = styled.View({
    flexDirection: 'row',
    flexWrap: 'wrap',
});

const DayWrapper = styled.TouchableOpacity({
    justifyContent: 'flex-end',
    width: (width - 40) / 7,
    height: 50,
    alignItems: 'center',
    marginTop: 30,
});

const DayText = styled.Text<{ _isToday: boolean }>(({ theme, _isToday }) => ({
    color: theme.ON_SURFACE,
    fontSize: 18,
    fontWeight: _isToday ? 900 : 'normal',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: _isToday ? 'Sora-Bold' : 'sora',
}));

const DayShifter = styled.View<{ shiftIndex: number }>(({ shiftIndex }) => ({
    height: 80,
    width:
        shiftIndex === 0
            ? ((width - 40) / 7) * 6
            : ((width - 40) / 7) * (shiftIndex - 1),
}));
