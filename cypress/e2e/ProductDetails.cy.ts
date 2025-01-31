describe("Home Page", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit(`${Cypress.config().baseUrl}/`);
    cy.wait(2000);
  });
  it("Complete Product Detalis page flow", () => {
    // Carregar a página inicial
    cy.contains("Verão 2025");

    // Navega até a página de detalhes do produto
    cy.get(":nth-child(1) > .flex-col > .gap-2 > .bg-black").click();
    cy.wait(2000);
    cy.url().should("contain", `${Cypress.config().baseUrl}/products/`);

    // Adiciona o produto ao carrinho
    cy.get(".self-center > .justify-center").click().click();
    cy.get(".justify-around > :nth-child(2) > .flex > .text-black").contains(
      "2"
    );
    //Navegar para a página do carrinho
    cy.get(":nth-child(2) > .flex > div > .mx-2").click();
    cy.url().should("be.equal", `${Cypress.config().baseUrl}/cart`);
  });
});
