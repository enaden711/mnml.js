import type { Linter } from "eslint";
import pedantryConfig from "./.pedantry/eslint.config.ts";

const config: Linter.Config[] = [
  {
    ignores: [".pedantry/**"],
  },
  ...pedantryConfig,
  // Add your project-specific overrides here
];

export default config;
