const path = require("path");
// const headers = require("./headers");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  cssModules: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["www.coinpayments.net"],
  },
};
