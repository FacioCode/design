const babelOptions = {
  exclude: /node_modules/u,
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
};

module.exports = babelOptions;
