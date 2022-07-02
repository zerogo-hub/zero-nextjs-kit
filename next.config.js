const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const { i18n } = require("./next-i18next.config");

const config = {
  poweredByHeader: false,
  generateBuildId: async () => {
    // null 表示每次打包都返回 unique id
    // 此处也可以单独指定，例如 '0.1.0'
    return null;
  },
  reactStrictMode: true,
  i18n,
};

module.exports = withBundleAnalyzer(config);
