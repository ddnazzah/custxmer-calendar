/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-24 07:48:01
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-25 15:17:39
 */

import Fair from '@shared/assets/vectors/fair.svg';
import Happy from '@shared/assets/vectors/happy.svg';
import Sad from '@shared/assets/vectors/sad.svg';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import endOfMonth from 'date-fns/endOfMonth';
import startOfMonth from 'date-fns/startOfMonth';
import toDate from 'date-fns/toDate';
import React, { Fragment } from 'react';

interface Props {
    month: number;
    year: number;
    dates: Array<{ date: number; mood: 'happy' | 'fair' | 'sad' }>;
}
const useCalendar = (props: Props) => {
    const { month, year, dates } = props;

    let nameOfDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const currentDate = toDate(new Date(year, month - 1));

    let newDays = eachDayOfInterval({
        start: startOfMonth(currentDate),
        end: endOfMonth(currentDate),
    });

    const renderIcon = (mood: string) => {
        if (mood === 'happy') {
            return <Happy />;
        } else if (mood === 'fair') {
            return <Fair />;
        } else if (mood === 'sad') {
            return <Sad />;
        } else {
            return <Fragment />;
        }
    };

    const renderMood = (day: number) => {
        const newDates = [...dates];
        const date = newDates.reverse().find(_date => _date.date === day);

        return renderIcon(date?.mood || '');
    };

    return { nameOfDays, newDays, renderMood, currentDate };
};

export default useCalendar;
