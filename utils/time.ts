import moment from 'moment';

/** 获取当前时间戳，秒 */
export const now = () => moment().unix();

/** 获取当前时间戳，毫秒 */
export const ms = () => moment().valueOf();

/** 格式化时间戳，秒。结果 2021-01-02 20:21:59 */
export const toString = (at: number) => moment(at * 1000).format('YYYY-MM-DD HH:mm:ss');

/** 获取今日 id，如 20210102 */
export const todayId = () => moment().format('YYYYMMDD');
