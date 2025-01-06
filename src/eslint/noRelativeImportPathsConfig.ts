import type { Linter } from "eslint";

import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths";

type BuildNoRelativeImportPathConfigProps = {
  packageName: string;
};

export function buildNoRelativeImportPathConfig({
  packageName,
}: BuildNoRelativeImportPathConfigProps): Linter.Config {
  return {
    plugins: {
      "no-relative-import-paths": noRelativeImportPaths,
    },
    rules: {
      "no-relative-import-paths/no-relative-import-paths": [
        "warn",
        {
          allowSameFolder: true,
          prefix: packageName,
          rootDir: "src",
        },
      ],
    },
  };
}
