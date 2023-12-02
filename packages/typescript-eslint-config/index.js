import eslintConfig from '@pwa/eslint-config/eslint.config';

export default [
  {
    ...eslintConfig,
    parser: '@typescript-eslint/parser',
    extends: [
      ...eslintConfig.extends.filter(id => id !== 'airbnb'),
      'airbnb-typescript',
    ],
    plugins: [...eslintConfig.plugins, '@typescript-eslint/recommended'],
  },
];
