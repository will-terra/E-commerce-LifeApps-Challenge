describe("Cart Page", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit(`${Cypress.config().baseUrl}/`);
    cy.wait(2000);
  });
  it("Complete cart flow", () => {
    cy.contains("Verão 2025");
    cy.get(":nth-child(1) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(":nth-child(2) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(":nth-child(3) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(":nth-child(4) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(".justify-around > :nth-child(2) > .flex > .text-black").contains(
      "8"
    );
    cy.get(":nth-child(2) > .flex > div > .mx-2").click();
    cy.url().should("be.equal", `${Cypress.config().baseUrl}/cart`);

    cy.get('.hidden > .justify-around > [type="button"] > .px-8').click();
    cy.get("#base-ui-\\:r7\\: > .text-lg").contains("Você concluiu o pedido!");
    cy.get("#base-ui-\\:r7\\: > :nth-child(3) > button > .undefined").click();
    cy.get(".lg\\:flex-row > .w-full").should("not.have.descendants");
  });

  it("Add and remove items from cart", () => {
    cy.contains("Verão 2025");
    cy.get(":nth-child(1) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(":nth-child(2) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(":nth-child(3) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(":nth-child(4) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(".justify-around > :nth-child(2) > .flex > .text-black").contains(
      "8"
    );
    cy.get(":nth-child(2) > .flex > div > .mx-2").click();
    cy.url().should("be.equal", `${Cypress.config().baseUrl}/cart`);
    cy.get(":nth-child(1) > .flex-col > .w-16 > .text-3xl").click();
    cy.get(".justify-around > :nth-child(2) > .flex > .text-black").contains(
      "7"
    );
    cy.get(":nth-child(2) > .flex-col > .cursor-pointer").click().click();
    cy.get(".justify-around > :nth-child(2) > .flex > .text-black").contains(
      "5"
    );
    cy.get(".hidden > .justify-around > .bg-white").click();
    cy.get(".lg\\:flex-row > .w-full").should("not.have.descendants");
  });
});
