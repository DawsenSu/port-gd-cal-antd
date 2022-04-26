// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   i18n
// }

// module.exports = nextConfig
// next.config.js
const withAntdLess = require("next-plugin-antd-less");
const { i18n } = require("./next-i18next.config");

module.exports = withAntdLess({
  lessVarsFilePath: './styles/antd.less', // optional 
  lessVarsFilePathAppendToEndOfContent: false, // optional
  // optional https://github.com/webpack-contrib/css-loader#object
  // cssLoaderOptions: {
  //   // ... 
  //   mode: "local",
  //   localIdentName: __DEV__ ? "[local]--[hash:base64:4]" : "[hash:base64:8]", // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
  //   exportLocalsConvention: "camelCase",
  //   exportOnlyLocals: false,
  //   // ...
  //   getLocalIdent: (context, localIdentName, localName, options) => {
  //     return "whatever_random_class_name";
  //   },
  // },
  // for Next.js ONLY
  nextjs: {
    localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
  },

  // Other Config Here...
  i18n,
  webpack (config) {
    return config;
  },

  // ONLY for Next.js 10, if you use Next.js 11, delete this block
  // future: {
  //   webpack5: true,
  // },
});

// module.exports = {
//   reactStrictMode: true,
//   i18n,
// }