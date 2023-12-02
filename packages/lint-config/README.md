# @pwa/lint-config

eslint configured for react + prettier

## installation

```sh
npm i -D @pwa/lint-config
```

create the `eslint.config.js` beside the `package.json` in the root of the monorepo

```js
import eslintConfig from '@pwa/lint-config/eslint.config';
export default eslintConfig;
```

create the `prettier.config.js` beside the `package.json` in the root of the monorepo

```js
import prettierConfig from '@pwa/lint-config/prettier.config';
export default prettierConfig;
```

create the `tsconfig.json` in the root of the monorepo
