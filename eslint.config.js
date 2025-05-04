// https://docs.expo.dev/guides/using-eslint/
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/*"],
    plugins: {
      perfectionist: require("eslint-plugin-perfectionist"),
    },
    rules: {
      // "perfectionist/sort-imports": ["error", { type: "natural" }],
      "perfectionist/sort-interfaces": ["error", { type: "alphabetical" }],
      "perfectionist/sort-jsx-props": ["error", { type: "alphabetical" }],
      "perfectionist/sort-objects": ["error", { type: "alphabetical" }],
    },
    settings: {
      perfectionist: {
        partitionByComment: true,
        type: "line-length",
      },
    },
  },
]);
