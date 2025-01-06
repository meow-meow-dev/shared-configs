import type { Linter } from "eslint";

import typescriptParser from "@typescript-eslint/parser";

import { eslintConfig } from "./eslintConfig.js";
import { importConfigs } from "./importConfigs.js";
import { nodeConfig } from "./nodeConfig.js";
import { buildNoRelativeImportPathConfig } from "./noRelativeImportPathsConfig.js";
import { packageJsonConfig } from "./packageJsonConfig.js";
import { perfectionistConfig } from "./perfectionistConfig.js";
import { promiseConfig } from "./promiseConfig.js";
import { reactConfig } from "./reactConfig.js";
import { reactHooksConfig } from "./reactHooksConfig.js";
import { reactRefreshConfig } from "./reactRefreshConfig.js";
import { tailwindConfigs } from "./tailwindConfigs.js";
import { testingLibraryConfig } from "./testingLibraryConfig.js";
import { typescriptConfigs } from "./typescriptConfigs.js";
import { unicornConfig } from "./unicornConfig.js";
import { vitestConfig } from "./vitestConfig.js";

/**
 * Assign the project to an employee.
 * @param {Object} configuration - configuration du build from
 * @param {string[]} [ignores=[]] - extra ignore fields
 * @param {string} configuration.packageName - name field from package.json
 * @type { import("eslint").Linter.Config[] }
 */

type DefineConfigProps = {
  ignores?: string[];
  packageName: string;
  tsconfigRootDir: string;
};

export function defineConfig({
  ignores = [],
  packageName,
  tsconfigRootDir,
}: DefineConfigProps): Linter.Config[] {
  return [
    {
      ignores: [
        ...ignores,
        "**/.vite/",
        "coverage/",
        "dist/",
        "**/_generated/",
        "**/locales/**/messages.ts",
        "**/node_modules/",
      ],
    },
    {
      files: ["**/*.{js,mjs,jsx,tsx,ts}"],
      languageOptions: {
        parserOptions: {
          ecmaVersion: 2020,
        },
      },
    },
    {
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        parser: typescriptParser,
        parserOptions: {
          projectService: true,
          sourceType: "module",
          tsconfigRootDir,
        },
      },
    },
    {
      settings: {
        "import/resolver-next": {
          typescript: {
            alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
            extensions: [
              ".ts",
              ".tsx",
              ".d.mts",
              ".d.ts",
              ".js",
              ".mjs",
              ".jsx",
              ".json",
              ".node",
            ],
            project: tsconfigRootDir,
          },
        },
      },
    },
    eslintConfig,
    ...importConfigs,
    nodeConfig,
    packageJsonConfig,
    perfectionistConfig,
    promiseConfig,
    reactConfig,
    reactHooksConfig,
    reactRefreshConfig,
    ...tailwindConfigs,
    testingLibraryConfig,
    ...typescriptConfigs,
    unicornConfig,
    buildNoRelativeImportPathConfig({ packageName }),
    vitestConfig,
  ];
}
