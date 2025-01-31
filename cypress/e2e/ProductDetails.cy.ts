describe("Home Page", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit(`${Cypress.config().baseUrl}/`);
    cy.wait(2000);
  });
  it("Complete Product Detalis page flow", () => {
    cy.get(":nth-child(1) > .flex-col > .gap-2 > .bg-black").click();
    cy.wait(2000);
    cy.url().should("contain", `${Cypress.config().baseUrl}/products/`);
    cy.get(".self-center > .justify-center").click().click();
    cy.get(".justify-around > :nth-child(2) > .flex > .text-black").contains(
      "2"
    );
  });
});
