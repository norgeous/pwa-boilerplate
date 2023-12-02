# eslint-config

eslint configured for react + prettier

## installation

```sh
npm i -D @pwa/eslint-config
```

create the `eslint.config.js` beside the `package.json`

```js
import { eslintConfig } from '@pwa/eslint-config';
export default eslintConfig;
```

create the `prettier.config.js` beside the `package.json`

```js
import { prettierConfig } from '@pwa/eslint-config';
export default prettierConfig;
```
