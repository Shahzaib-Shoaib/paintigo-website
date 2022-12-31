const { i18n } = require("./next-i18next.config");
const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  // disable: process.env.NODE_ENV !== "production",
  dest: "public",
  runtimeCaching,
});

module.exports = withPWA({
  i18n,
  reactStrictMode: true,
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
  },
  images: {
    domains: ["cdn.shopify.com"],
  },
});
