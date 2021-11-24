module.exports = svgr({
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
});

function svgr(nextConfig = {}) {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (typeof nextConfig.webpack === "function") {
        config = nextConfig.webpack(config, options);
      }

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              dimensions: false,
              svgoConfig: { removeViewBox: false },
            },
          },
        ],
      });

      return config;
    },
  });
}
