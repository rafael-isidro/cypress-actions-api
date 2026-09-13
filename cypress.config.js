const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://reqres.in/api",
    specPattern: "cypress/tests/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {},
  },
});
