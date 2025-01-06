# Shared configurations

## Prettier

```js
// prettier.config.mjs
export default from "@meow-meow-dev/shared-configs/prettier";
```

## Eslint

```js
import { defineConfig } from "@meow-meow-dev/shared-configs/eslint";

export default defineConfig({
  packageName: "REPLACE WITH PACKAGE NAME",
  tsconfigRootDir: import.meta.dirname,
});
```
