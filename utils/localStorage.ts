/**
 * html5 提供 localStorage
 */
import _ from 'lodash';
import { aesDecrypt, aesEncrypt, defaultEncryptProps, md5 } from './encrypt';
import { now } from './time';

const _key = 'MqBtGJ0IRjIohrqy';
const _iv = 'itRf8QYzUjRCypxG';

export const get = (key: string): string | null => {
  if (window === undefined || !window.localStorage || window.localStorage === undefined) {
    return null;
  }

  const dstKey = md5(key);

  const result = window.localStorage.getItem(dstKey);
  if (!result || result === undefined) {
    return null;
  }
  const data = JSON.parse(aesDecrypt(defaultEncryptProps(result, _key, _iv)));
  const { expired, value } = data;

  // 比较是否过期
  const cur = now();
  if (expired !== -1 && expired < cur) {
    // 清理掉过期数据
    window.localStorage.removeItem(dstKey);
    return null;
  }
  return value;
};

// expired: 失效时间戳，默认1天，-1 表示用不过期
export const set = (key: string, value: string, expired: number) => {
  if (window === undefined || !window.localStorage || window.localStorage === undefined) {
    return;
  }

  if (!(_.isArrayLikeObject(value) || _.isString(value) || _.isNumber(value))) {
    return;
  }

  if (expired === 0 || expired === undefined) {
    expired = now() + 24 * 3600;
  }

  const content = JSON.stringify({
    expired,
    value
  });

  const dstKey = md5(key);

  window.localStorage.setItem(dstKey, aesEncrypt(defaultEncryptProps(content, _key, _iv)));
};

export const clear = (key: string) => {
  if (window === undefined || !window.localStorage || window.localStorage === undefined) {
    return;
  }
  const dstKey = md5(key);
  window.localStorage.removeItem(dstKey);
};

