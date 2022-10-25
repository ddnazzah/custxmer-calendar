/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-24 07:24:55
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-25 18:15:49
 */

import { DatesProps } from '@shared/types';

const useMyCalendar = () => {
    let calendarProps = {
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

    return {
        calendarProps,
    };
};

export default useMyCalendar;
