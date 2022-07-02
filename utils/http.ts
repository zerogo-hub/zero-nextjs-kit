import axios from 'axios';
import Cookie from 'js-cookie';
import Qs from 'qs';
import { hmacSHA256 } from './encrypt';
import { randomString } from './random';
import { now } from './time';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';

/** 指定时间未响应 则会停止请求，毫秒 */
axios.defaults.timeout = 60000;
/**  true 携带cookie, false 不携带cookie */
axios.defaults.withCredentials = true;

/**
 * 计算签名，所有参数除了 sign 之外，按照顺序排列，组成签名字符串 signStr
 * 
 * sign = hmacSHA256(signStr, key)
 * 
 * @param key 签名密钥
 * @param params 参数 {k1:v1, k2:v2, ...}
 * @returns 
 */
const calcSign = (key: string, params: any): string => {
  if (!params || typeof params !== 'object') {
    return '';
  }

  const keys: string[] = [];
  for (const key in params) {
    if (key === 'sign') {
      continue;
    }

    keys.push(key);
  }
  keys.sort();

  const fields: string[] = [];
  for (const key of keys) {
    const value: string = params[key];
    if (value === undefined) {
      continue;
    }
    fields.push(`${key}=${value}`);
  }

  const signStr = fields.join('');
  const sign = hmacSHA256(signStr, key);
  return sign;
};

/** 请求拦截器 */
axios.interceptors.request.use(
  (config) => {
    // csrf token
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
      const csrfToken = Cookie.get('csrfToken');
      if (csrfToken) {
        if (config.headers) {
          config.headers['X-Csrf-Token'] = csrfToken;
        }
      }
    }

    // 密钥
    const key = 'gbF97MNgG7yVZdXH';

    // 必须参数
    const timestamp = now();
    const nonce = randomString(32);

    if (config.method === 'get' || config.method === 'delete') {
      config.params = {
        ...config.params,
        timestamp,
        nonce
      };
      config.params.sign = calcSign(key, config.params);
    } else if (config.method === 'post' || config.method === 'put') {
      const data = { ...config.data, timestamp, nonce };
      const sign = calcSign(key, data);

      config.data = Qs.stringify(
        {
          ...data,
          sign
        },
        { arrayFormat: 'repeat' }
      );
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/** 响应拦截器 */
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export const httpGet = (baseURL: string, url: string, params: any) =>
  axios
    .get(baseURL + url, { params })
    .then((response) => {
      // res: {data, status, statusText, headers, config}
      return response.data;
    })
    .catch((reason) => {
      return { code: -1, message: `http error: ${reason}` };
    });

export const httpPost = (baseURL: string, url: string, params: any) =>
  axios
    .post(baseURL + url, params)
    .then((response) => {
      // res: {data, status, statusText, headers, config}
      return response.data;
    })
    .catch((reason) => {
      return { code: -1, message: `http error: ${reason}` };
    });

export const httpPut = (baseURL: string, url: string, params: any) =>
  axios
    .put(baseURL + url, params)
    .then((response) => {
      // res: {data, status, statusText, headers, config}
      return response.data;
    })
    .catch((reason) => {
      return { code: -1, message: `http error: ${reason}` };
    });

export const httpPatch = (baseURL: string, url: string, params: any) =>
  axios
    .patch(baseURL + url, params)
    .then((response) => {
      // res: {data, status, statusText, headers, config}
      return response.data;
    })
    .catch((reason) => {
      return { code: -1, message: `http error: ${reason}` };
    });

export const httpDelete = (baseURL: string, url: string, params: any) =>
  axios
    .delete(baseURL + url, { params })
    .then((response) => {
      // res: {data, status, statusText, headers, config}
      return response.data;
    })
    .catch((reason) => {
      return { code: -1, message: `http error: ${reason}` };
    });
