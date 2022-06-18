import { homePage } from "../page-objects/home-page";

describe("HomePage Search Tests", () => {
  /* Each home page test accepts the cookie banner - we could do this globally in e2e.js but we might have cookie banner tests
   so this shows you can have before hooks for indivdual specs as well as globally. */

  beforeEach(() => {
    cy.acceptCookies();
  });

  it("Assert Header", () => {
    homePage.assertHeader();
  });

  it("Click Contact Us", () => {
    homePage.clickContactUsLink();
    cy.url().should("equal", "https://sliide.com/contact-us");
  });

  it("Force Fail To Show Report", () => {
    homePage.clickContactUsLink();
    cy.url().should("equal", "https://sliide.com/contact-usFAIL");
  });
});
