const path = require('path');
const baseConfig = require('../webpack.config.base.js');


module.exports = {
  stories: ['../src/stories/**/*.stories.tsx'],

  webpackFinal: async (config) => {
    const tsRules = {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: ['next/babel', 'react-app'],
          },
        },
      ],
    };


    config.module.rules = [...config.module.rules, tsRules];
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = {
      ...config.resolve.alias,
      component: path.resolve(__dirname, '../src/components'),
      antd: path.resolve(__dirname, '../node_modules/antd')
    };
    config.resolve.modules = [path.resolve(__dirname, '../node_modules'), 'node_modules'];
    return { ...config, resolve: { ...config.resolve, ...baseConfig.resolve } };
  },

  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-themes'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  docs: {
    autodocs: true
  }
};
