import * as noDuplicateLocators from "./locators/commonLocators";

export default [
  {
    plugins: {
      custom: {
        rules: {
          "no-duplicate-locators": noDuplicateLocators,
        },
      },
    },

    rules: {
      "custom/no-duplicate-locators": "error",
    },
  },
];