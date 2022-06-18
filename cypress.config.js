const { defineConfig } = require("cypress");

const { lighthouse, pa11y, prepareAudit } = require("cypress-audit");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Add Cypress mochawesom report to generate a html page
      // https://www.npmjs.com/package/cypress-mochawesome-reporter?activeTab=readme
      require("cypress-mochawesome-reporter/plugin")(on);

      // cypress-audit configuration
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
        pa11y: pa11y(console.log.bind(console)),
      });
    },

    // Global Cypress configuration settings
    baseUrl: "https://sliide.com/",
    video: true,
    chromeWebSecurity: false,
    defaultCommandTimeout: 25000,
    pageLoadTimeout: 20000,
    retries: {
      runMode: 3,
      openMode: 0,
    },

    // Report config generates an http report in cypress/reports
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      quiet: true,
      reportPageTitle: "Cypress Test Report",
      embeddedScreenshots: true,
      inlineAssets: true,
    },
  },
});
