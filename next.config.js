const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const { i18n } = require('./next-i18next.config');

const config = {
  poweredByHeader: false,
  generateBuildId: async () => {
    // null 表示每次打包都返回 unique id
    // 此处也可以单独指定，例如 '0.1.0'
    return null;
  },
  // antd (4.16.9) 报错: Warning: findDOMNode is deprecated in StrictMode.
  // findDOMNode was passed an instance of DomWrapper which is inside StrictMode.
  // 因此关闭严格模式
  reactStrictMode: false,
  i18n
};

module.exports = withBundleAnalyzer(config);
