// import airbnb from 'eslint-config-airbnb';
// import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  // airbnb,
  // prettier,
  {
    // env: {
    //   browser: true,
    //   node: true,
    //   es2020: true,
    // },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    // extends: ["eslint:recommended", "airbnb", "prettier"],
    // plugins: [
    //   "prettier",
    //   "import",
    //   "jsx-a11y",
    //   "react",
    //   "react-hooks",
    //   "react-refresh",
    // ],
    plugins: {
      prettier: pluginPrettier,
      import: pluginImport,
      'jsx-a11y': pluginJsxA11y,
      react: pluginReact,
      'react-refresh': pluginReactRefresh,
      'react-hooks': pluginReactHooks,
    },
    rules: {
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
      'react/boolean-prop-naming': 'error',

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
