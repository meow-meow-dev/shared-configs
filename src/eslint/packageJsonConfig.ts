import type { Linter } from "eslint";

import packageJson from "eslint-plugin-package-json";

export const packageJsonConfig: Linter.Config = packageJson.configs.recommended;
