import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
// import airbnb from 'eslint-config-airbnb';
// import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginFunctional from 'eslint-plugin-functional'; // promote FP
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginTsEslint from '@typescript-eslint/eslint-plugin';

import tsParser from '@typescript-eslint/parser';

const compat = new FlatCompat();

export default [
  js.configs.recommended,
  ...compat.extends('eslint-config-airbnb-typescript'),
  ...compat.extends('eslint-config-prettier'),

  // airbnb,
  // prettier,
  // tsesreco,
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { modules: true },
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
    plugins: {
      functional: pluginFunctional,
      prettier: pluginPrettier,
      import: pluginImport,
      'jsx-a11y': pluginJsxA11y,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh,
      '@typescript-eslint': pluginTsEslint,
      ts: pluginTsEslint,
    },
    ignorePatterns: ['dist'],
    rules: {
      ...pluginTsEslint.configs['eslint-recommended'].rules,
      ...pluginTsEslint.configs['recommended'].rules,

      'react/jsx-filename-extension': 'off',
      'import/extensions': 'off',

      // https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',

      // prefer fat arrow components
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],

      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
      // this forces bool proptypes to be prefixed with "is" or "has"
      'react/boolean-prop-naming': [
        'error',
        { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' },
      ],

      // https://github.com/import-js/eslint-plugin-import/issues/1302#issuecomment-572546519
      'import/no-extraneous-dependencies': ['off'],

      // added by vite
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
