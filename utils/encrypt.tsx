import CryptoJS from 'crypto-js';

/**
 * MD5
 * @param {string} word
 * @returns {string}
 * @example
 *
 * md5('123456')
 * => e10adc3949ba59abbe56e057f20f883e
 */
export const md5 = (word: string) => CryptoJS.MD5(word).toString();

/**
 * SHA1
 * @param {string} word
 * @returns {string}
 * @example
 *
 * sha1('123456')
 * => 7c4a8d09ca3762af61e59520943dc26494f8941b
 */
export const sha1 = (word: string) => CryptoJS.SHA1(word).toString(CryptoJS.enc.Hex);

/**
 * SHA224
 * @param {string} word
 * @returns {string}
 * @example
 *
 * sha224('123456')
 * => f8cdb04495ded47615258f9dc6a3f4707fd2405434fefc3cbf4ef4e6
 */
export const sha224 = (word: string) => CryptoJS.SHA224(word).toString(CryptoJS.enc.Hex);

/**
 * SHA256
 * @param {string} word
 * @returns {string}
 * @example
 *
 * sha256('123456')
 * => 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
 */
export const sha256 = (word: string) => CryptoJS.SHA256(word).toString(CryptoJS.enc.Hex);

/**
 * SHA384
 * @param {string} word
 * @returns {string}
 * @example
 *
 * sha384('123456')
 * => 0a989ebc4a77b56a6e2bb7b19d995d185ce44090c13e2984b7ecc6d446d4b61ea9991b76a4c2f04b1b4d244841449454
 */
export const sha384 = (word: string) => CryptoJS.SHA384(word).toString(CryptoJS.enc.Hex);

/**
 * SHA512
 * @param {string} word
 * @returns {string}
 * @example
 *
 * sha512('123456')
 * => ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413
 */
export const sha512 = (word: string) => CryptoJS.SHA512(word).toString(CryptoJS.enc.Hex);

/**
 * HMAC MD5
 * @param {string} word
 * @param {string} secret
 * @returns {string}
 * @example
 *
 * hmacMD5('123456', 'abcedf')
 * => c6bdcc80c381536a3e85f2ee5f71cebb
 */
export const hmacMD5 = (word: string, secret: string) => CryptoJS.HmacMD5(word, secret).toString(CryptoJS.enc.Hex);

/**
 * HMAC SHA1
 * @param {string} word
 * @param {string} secret
 * @returns {string}
 * @example
 *
 * hmacSHA1('123456', 'abcedf')
 * => b8466fbb9634771d25d8ddd1242484bdb748b179
 */
export const hmacSHA1 = (word: string, secret: string) => CryptoJS.HmacSHA1(word, secret).toString(CryptoJS.enc.Hex);

/**
 * HMAC SHA256
 * @param {string} word
 * @param {string} secret
 * @returns {string}
 * @example
 *
 * hmacSHA256('123456', 'abcedf')
 * => ec4a11a5568e5cfdb5fbfe7152e8920d7bad864a0645c57fe49046a3e81ec91d
 */
export const hmacSHA256 = (word: string, secret: string) => CryptoJS.HmacSHA256(word, secret).toString(CryptoJS.enc.Hex);

/**
 * HMAC SHA512
 * @param {string} word
 * @param {string} secret
 * @returns {string}
 *
 * @example
 *
 * hmacSHA512('123456', 'abcedf')
 * => 130a4caafb11b798dd7528628d21f742feaad266e66141cc2ac003f0e6437cb5749245af8a3018d354e4b55e14703a5966808438afe4aae516d2824b014b5902
 */
export const hmacSHA512 = (word: string, secret: string) => CryptoJS.HmacSHA512(word, secret).toString(CryptoJS.enc.Hex);

/**
 * BASE64 ENCODE
 * @param {string} word
 * @returns {string}
 * @example
 *
 * base64Encode('123456')
 * => MTIzNDU2
 */
export const base64Encode = (word: string) => CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(word));

/**
 * BASE64 DECODE
 * @param {string} word
 * @returns {string}
 * @example
 *
 * base64Decode('MTIzNDU2')
 * => '123456'
 */
export const base64Decode = (word: string) => CryptoJS.enc.Base64.parse(word).toString(CryptoJS.enc.Utf8);

/**
 * encodeURI
 * @param {string} word
 * @returns {string}
 * @example
 *
 * urlEncode('https://www.keylala.cn')
 * => https://www.keylala.cn
 */
export const urlEncode = (word: string) => encodeURI(word);

/**
 * decodeURI
 * @param {string} word
 * @returns {string}
 * @example
 *
 * urlDecode('https://www.keylala.cn')
 * => https://www.keylala.cn
 */
export const urlDecode = (word: string) => decodeURI(word);

/**
 * encodeURIComponent
 * @param {string} word
 * @returns {string}
 * @example
 *
 * urlEncode('https://www.keylala.cn')
 * => https%3A%2F%2Fwww.keylala.cn
 */
export const urlEncodeComponent = (word: string) => encodeURIComponent(word);

/**
 * decodeURIComponent
 * @param {string} word
 * @returns {string}
 * @example
 *
 * urlEncode('https%3A%2F%2Fwww.keylala.cn')
 * => https://www.keylala.cn
 */
export const urlDecodeComponent = (word: string) => decodeURIComponent(word);

export enum Mode {
  CBC = 'CBC',
  ECB = 'ECB',
  CTR = 'CTR',
  CFB = 'CFB',
  OFB = 'OFB'
}

const ModeMapping = new Map([
  [Mode.CBC, CryptoJS.mode.CBC],
  [Mode.ECB, CryptoJS.mode.ECB],
  [Mode.CTR, CryptoJS.mode.CTR],
  [Mode.CFB, CryptoJS.mode.CFB],
  [Mode.OFB, CryptoJS.mode.OFB]
]);

export enum Padding {
  Pkcs7 = 'Pkcs7',
  Pkcs5 = 'Pkcs5',
  AnsiX923 = 'AnsiX923',
  Iso10126 = 'Iso10126',
  Iso97971 = 'Iso97971',
  ZeroPadding = 'ZeroPadding',
  NoPadding = 'NoPadding'
}

const PaddingMapping = new Map([
  [Padding.Pkcs7, CryptoJS.pad.Pkcs7],
  [Padding.Pkcs5, CryptoJS.pad.Pkcs7],
  [Padding.AnsiX923, CryptoJS.pad.AnsiX923],
  [Padding.Iso10126, CryptoJS.pad.Iso10126],
  [Padding.Iso97971, CryptoJS.pad.Iso97971],
  [Padding.ZeroPadding, CryptoJS.pad.ZeroPadding],
  [Padding.NoPadding, CryptoJS.pad.NoPadding]
]);

// 输出编码
export enum Coding {
  BASE64 = 'BASE64',
  HEX = 'HEX'
}

export interface EncryptProps {
  /**  要加密的内容 */
  word: string;
  /** 密钥 */
  key: string;
  /**  密钥偏移量 */
  iv: string;
  /**  默认 CBC */
  mode: Mode;
  /**  返回值编码，默认 Coding.BASE64 */
  coding: Coding;
  /**  填充模式，默认为 Pkcs7 */
  padding: Padding;
}

export const defaultEncryptProps = (word: string, key: string, iv: string): EncryptProps => ({
  word: word,
  key: key,
  iv: iv,
  mode: Mode.CBC,
  coding: Coding.BASE64,
  padding: Padding.Pkcs7,
})

/**
 * AES 加密
 * 填充: pkcs7padding
 * 数据块: 128位
 * @param {EncryptProps} props
 * @return {string} 加密的内容
 */
export const aesEncrypt = (props: EncryptProps) => {
  const parseKey = CryptoJS.enc.Utf8.parse(props.key);
  const parseIV = CryptoJS.enc.Utf8.parse(props.iv);

  const parseWord = CryptoJS.enc.Utf8.parse(props.word);

  const realMode = ModeMapping.get(props.mode);
  const realPadding = PaddingMapping.get(props.padding);

  const encrypted = CryptoJS.AES.encrypt(parseWord, parseKey, {
    iv: parseIV,
    mode: realMode,
    padding: realPadding
  });

  return props.coding == Coding.BASE64 ? encrypted.toString() : encrypted.ciphertext.toString();
};

/**
 * AES 解密
 * @param {EncryptProps} props
 * @return {string} 加密的内容
 */
export const aesDecrypt = (props: EncryptProps) => {
  const parseKey = CryptoJS.enc.Utf8.parse(props.key);
  const parseIV = CryptoJS.enc.Utf8.parse(props.iv);

  let parseWord = '';
  if (props.coding == Coding.BASE64) {
    parseWord = props.word;
  } else {
    parseWord = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(props.word));
  }

  const realMode = ModeMapping.get(props.mode);
  const realPadding = PaddingMapping.get(props.padding);

  const decrypt = CryptoJS.AES.decrypt(parseWord, parseKey, {
    iv: parseIV,
    mode: realMode,
    padding: realPadding
  });
  return decrypt.toString(CryptoJS.enc.Utf8);
};

/**
 * des 加密
 *
 * @param {EncryptProps} props
 * @return {string} 加密的内容
 */
export const desEncrypt = (props: EncryptProps) => {
  const parseKey = CryptoJS.enc.Utf8.parse(props.key);
  const parseIV = CryptoJS.enc.Utf8.parse(props.iv);

  const parseWord = CryptoJS.enc.Utf8.parse(props.word);

  const realMode = ModeMapping.get(props.mode);
  const realPadding = PaddingMapping.get(props.padding);

  const encrypted = CryptoJS.DES.encrypt(parseWord, parseKey, {
    iv: parseIV,
    mode: realMode,
    padding: realPadding
  });
  return props.coding == Coding.BASE64 ? encrypted.toString() : encrypted.ciphertext.toString();
};

/**
 * des 解密
 *
 * @param {EncryptProps} props
 * @return {string} 加密的内容
 */
export const desDecrypt = (props: EncryptProps) => {
  const parseKey = CryptoJS.enc.Utf8.parse(props.key);
  const parseIV = CryptoJS.enc.Utf8.parse(props.iv);

  let parseWord = '';
  if (props.coding == Coding.BASE64) {
    parseWord = props.word;
  } else {
    parseWord = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(props.word));
  }

  const realMode = ModeMapping.get(props.mode);
  const realPadding = PaddingMapping.get(props.padding);

  const decrypt = CryptoJS.DES.decrypt(parseWord, parseKey, {
    iv: parseIV,
    mode: realMode,
    padding: realPadding
  });
  return decrypt.toString(CryptoJS.enc.Utf8);
};
