import selectors from "../test-data/home-page-data.js";

class HomePage {
  navigateToHome() {
    // In Cypress when you visit / it means visit the base url. This is set it cypress.config.js or can be overwritten with an env variable.
    cy.visit("/");
  }

  clickContactUsLink() {
    // Reads the contactUsLink selector from the imported file then finds and clicks the first instance of it
    // Note usually we wouldn't need to get the first instance but the Sliide website is a bit strnage everything is in the code twice.
    cy.get(selectors.contactUsLink).first().click();
  }

  assertHeader() {
    // Check we see the Sliide logo
    cy.get(selectors.headerLogo).should("be.visible");

    // Assert header contains 18 links
    cy.get(selectors.headerLinks).should("have.length", 18);
  }
}

export const homePage = new HomePage();
