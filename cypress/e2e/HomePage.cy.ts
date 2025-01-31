describe("Home Page", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit(`${Cypress.config().baseUrl}/`);
    cy.wait(2000);
  });

  it("Load the home page", () => {
    cy.contains("Verão 2025");
  });

  it("Add four items to cart", () => {
    cy.get(":nth-child(1) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(":nth-child(2) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(".justify-around > :nth-child(2) > .flex > .text-black").contains(
      "4"
    );
  });
  it("Navigate to the next page", () => {
    cy.get('[aria-label="Próxima página"]').click();
    cy.get("span").contains("2 de 3");
  });

  it("Filter by category", () => {
    cy.get('[value="Camisetas"] > .flex').click();
    cy.get(".grid").should("not.contain", "Tênis");
  });

  it("Navigates to cart", () => {
    cy.get(":nth-child(2) > .flex > div > .mx-2").click();
    cy.url().should("be.equal", `${Cypress.config().baseUrl}/cart`);
  });
});
