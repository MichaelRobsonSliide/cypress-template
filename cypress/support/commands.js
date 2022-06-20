// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import cypress/audit
import "cypress-audit/commands";

// Example of a custom command - this one accepts the Cookie banner which can appear on any page which is why it makes sense to put it here
// this can be called by cy.acceptCookies() from any file.
Cypress.Commands.add("acceptCookies", () => {
  cy.get(
    "button[class='button relative block md:flex w-fit cursor-pointer bg-blue text-white px-[24px] py-[16px] md:px-[28px] md:py-[12px] leading-[1.35] p-bold font-medium rounded-[38px] appearance-none !transition-[filter] !delay-[0s] !duration-[300ms] ease-in-out    pointer-outside']"
  ).click();
});
