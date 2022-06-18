// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Import Cypress report generator
import "cypress-mochawesome-reporter/register";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Anything in here runs before every spec file
beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  // Set cookie with the spec file, if any tests causes an alert on our dashboard we should then be able to see which test it was
  cy.setCookie("AutomatedTestRunning:", Cypress.spec.relative);

  // Visit the baseUrl configured in cypress.config.js or overwritten in pipeline via an env variable
  cy.visit("/");
});
