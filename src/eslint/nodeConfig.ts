import { Linter } from "eslint";
import nodePlugin from "eslint-plugin-n";

export const nodeConfig: Linter.Config = {
  ...nodePlugin.configs["flat/recommended-module"],
  rules: {
    "n/file-extension-in-import": ["error", "always"],
    "n/no-missing-import": ["off"],
    "n/no-process-env": ["error"],
    "n/no-unsupported-features/node-builtins": [
      "error",
      {
        allowExperimental: true,
      },
    ],
  },
};
