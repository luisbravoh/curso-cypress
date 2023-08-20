const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  retries: 1,
  //video: false,
  e2e: {
    setupNodeEvents(on, config) {
     // on('file:preprocessor', webpackPreprocessor);
      allureWriter(on, config);
      return config;
    },
  },
});
