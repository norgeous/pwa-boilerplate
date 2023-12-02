module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: ['eslint:recommended', 'airbnb', 'prettier'],
  plugins: ['prettier', 'import', 'jsx-a11y', 'react', 'react-hooks'],
  ignorePatterns: ['storybook-static', 'visdiff-report'],
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
  },
};
