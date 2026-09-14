const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true
  },

  e2e: {
    baseUrl: "https://reqres.in/api",
    specPattern: "cypress/tests/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000
  }
});