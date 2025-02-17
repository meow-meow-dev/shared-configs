import { Linter } from "eslint";

export const eslintConfig: Linter.Config = {
  rules: {
    "id-denylist": ["error", "e", "cb"],
  },
};
