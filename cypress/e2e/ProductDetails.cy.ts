describe("Home Page", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit(`${Cypress.config().baseUrl}/`);
    cy.wait(3000);
  });
  it("Complete Product Detalis page flow", () => {
    // Carregar a página inicial
    cy.contains("Verão 2025");

    // Navega até a página de detalhes do produto
    cy.get(":nth-child(1) > .flex-col > .gap-2 > .bg-black").click();
    cy.wait(3000);
    cy.url().should("contain", `${Cypress.config().baseUrl}/products/`);

    // Adiciona o produto ao carrinho
    cy.get(".self-center > .justify-center").click().click();
    cy.get(".mr-4 > .flex > .text-black").contains("2");
    //Navegar para a página do carrinho
    cy.wait(3000);
    cy.get(".mr-4 > .flex > div > .mx-2").click();
    cy.url().should("be.equal", `${Cypress.config().baseUrl}/cart`);

    //Navegar para a página de detalhes de outro produto
    cy.visit(`${Cypress.config().baseUrl}/products/15`);
    cy.wait(3000);
    cy.get(".text-4xl").contains("Militar");
  });
});
