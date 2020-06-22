module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          ie: 11
        }
      }
    ]
  ],
  plugins: [
      [
          '@babel/plugin-proposal-decorators',
          {
              legacy: true,
          },
      ],
      '@babel/plugin-proposal-class-properties',
      [
          '@babel/plugin-transform-runtime',
          {
              regenerator: true,
          },
      ],
      [
        '@babel/plugin-syntax-dynamic-import',
      ]
  ],
};

//require babel.config.js if transpiling stuff in node_modules
// i.e. lit-element   