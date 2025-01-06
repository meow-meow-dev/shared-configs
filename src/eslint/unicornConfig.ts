import eslintPluginUnicorn from "eslint-plugin-unicorn";

export const unicornConfig = {
  ...eslintPluginUnicorn.configs["flat/recommended"],
  rules: {
    "unicorn/better-regex": "error",
    "unicorn/filename-case": ["off"],
    "unicorn/no-array-reduce": ["off"],
    "unicorn/no-null": ["off"] /* Necessary for tanstack-query */,
    "unicorn/no-useless-undefined": [
      "error",
      { checkArguments: false, checkArrowFunctionBody: false },
    ],
    "unicorn/prevent-abbreviations": ["off"],
    "unicorn/switch-case-braces": ["error", "avoid"],
  },
};
