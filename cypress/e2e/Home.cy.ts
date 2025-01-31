describe("Home", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit(`${Cypress.config().baseUrl}/`);
    cy.wait(2000);
    // Carregar a página inicial
    cy.contains("Verão 2025");
  });

  it("Navigates through pagination", () => {
    // Adicionar quatro itens ao carrinho
    cy.get(":nth-child(1) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(":nth-child(2) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(".justify-around > :nth-child(2) > .flex > .text-black").contains(
      "4"
    );
    // Navegar para próxima página
    cy.get('[aria-label="Próxima página"]').click();
    cy.get("span").contains("2 de 4");

    // Adicionar quatro itens ao carrinho
    cy.get(":nth-child(1) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(":nth-child(2) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(".justify-around > :nth-child(2) > .flex > .text-black").contains(
      "8"
    );

    // Navegar para página anterior
    cy.get(".tab-0").click();
    cy.get("span").contains("1 de 4");
  });

  it("Filter by categories", () => {
    // Filtrar por camisetas
    cy.get('[value="Camisetas"] > .flex').click();
    cy.get(".grid").should("not.contain", "Tênis");
    cy.get(":nth-child(1) > .flex-col > .gap-2 > .bg-white").click();

    // Filtrar por tênis
    cy.get('[value="Tênis"] > .flex').click();
    cy.get(".grid").should("not.contain", "Calça");
    cy.get(":nth-child(1) > .flex-col > .gap-2 > .bg-white").click();

    // Filtrar por calças
    cy.get('[value="Calças"] > .flex').click();
    cy.get(".grid").should("not.contain", "Camiseta");
    cy.get(":nth-child(1) > .flex-col > .gap-2 > .bg-white").click();
  });
});
