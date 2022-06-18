import selectors from "../test-data/home-page-data.js";

class HomePage {
  navigateToHome() {
    cy.visit("/");
  }

  clickContactUsLink() {
    // Reads the contactUsLink selector from the imported file then finds and clicks the first instance of it
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
