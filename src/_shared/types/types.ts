/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-04-15 17:07:48
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-25 15:22:03
 */

import 'styled-components';

export interface Theme {
    BACKGROUND: string;
    SURFACE: string;
    PRIMARY: string;
    ON_BACKGROUND: string;
    ON_SURFACE: string;
    ON_PRIMARY: string;
}

export type DatesProps = Array<{
    date: number;
    mood: 'happy' | 'fair' | 'sad';
}>;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
