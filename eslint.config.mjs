import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  // Base JavaScript configuration
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha, // Add Mocha globals for TDD
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // TDD-friendly rules
      "no-unused-expressions": "off", // Allows expect(x).to.be.true patterns
      "no-undef": "error",
      "no-console": "warn",
    },
  },

  // Test-specific configuration
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.mocha, // describe, it, before, etc.
      },
    },
    rules: {
      // TDD-specific rule relaxations
      "max-nested-callbacks": ["warn", 6], // Allow more nesting in tests
      "no-magic-numbers": "off", // Allow magic numbers in tests
    },
  },
]);
