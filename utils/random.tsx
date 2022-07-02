import { nanoid } from 'nanoid/non-secure';

// 生成指定长度的字符串
export const randomString = (size: number) => nanoid(size);