const eslintConfig = require('@pwa/eslint-config');

module.exports = {
  ...eslintConfig,
  parser: '@typescript-eslint/parser',
  extends: [
    ...eslintConfig.extends.filter(id => id !== 'airbnb'),
    'airbnb-typescript',
  ],
  plugins: [...eslintConfig.plugins, '@typescript-eslint/recommended'],
};
