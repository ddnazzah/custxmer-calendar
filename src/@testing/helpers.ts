/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-27 18:58:29
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-27 19:00:10
 */

export const sleep = (seconds: number) => {
    return new Promise(resolve => setTimeout(resolve as any, seconds * 1000));
};
