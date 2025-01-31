describe("Home Page", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit(`${Cypress.config().baseUrl}/`);
    cy.wait(2000);
  });

  it("Complete home page flow", () => {
    // Carregar a página inicial
    cy.contains("Verão 2025");

    // Adicionar quatro itens ao carrinho
    cy.get(":nth-child(1) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(":nth-child(2) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(".justify-around > :nth-child(2) > .flex > .text-black").contains(
      "4"
    );

    // Navegar para a próxima página
    cy.get('[aria-label="Próxima página"]').click();
    cy.get("span").contains("2 de 4");

    // Filtrar por categoria
    cy.get('[value="Camisetas"] > .flex').click();
    cy.get(".grid").should("not.contain", "Tênis");
    cy.get(":nth-child(1) > .flex-col > .gap-2 > .bg-white").click();

    // Navegar para o carrinho
    cy.get(":nth-child(2) > .flex > div > .mx-2").click();
    cy.url().should("be.equal", `${Cypress.config().baseUrl}/cart`);
  });
});
