describe("Cart", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit(`${Cypress.config().baseUrl}/`);
    cy.wait(3000);
    // Carregar a página inicial
    cy.contains("Verão 2025");

    // Adicionar oito itens ao carrinho
    cy.get(":nth-child(1) > .flex-col > .gap-4 > .bg-white").click().click();
    cy.get(":nth-child(2) > .flex-col > .gap-4 > .bg-white").click().click();
    cy.get(":nth-child(3) > .flex-col > .gap-4 > .bg-white").click().click();
    cy.get(":nth-child(4) > .flex-col > .gap-4 > .bg-white").click().click();
    cy.get(".mr-4 > .flex > .text-black").contains("8");

    //Navegar para a página do carrinho
    cy.get(":nth-child(2) > .flex > div > .mx-2").click();
    cy.url().should("be.equal", `${Cypress.config().baseUrl}/cart`);
  });
  it("Finish order", () => {
    //Finalizar pedido
    cy.get('.hidden > .justify-around > [type="button"] > .px-12').click();
    cy.get("#base-ui-\\:r7\\: > .text-lg").contains("Você concluiu o pedido!");
    cy.get("#base-ui-\\:r7\\: > :nth-child(3) > button > .px-6").click();
    cy.get(".lg\\:flex-row > .w-full").should("not.have.descendants");
  });

  it("Add and remove items from cart", () => {
    //Remover um item do carrinho clicando no seletor de quantidade
    cy.get(":nth-child(2) > .flex-col > .gap-2 > .text-3xl").click();
    cy.get(".mr-4 > .flex > .text-black").contains("7");

    //Remover um item do carrinho clicando no botão de lixeira
    cy.get(":nth-child(2) > .flex-col > .cursor-pointer").click();
    cy.get(".mr-4 > .flex > .text-black").contains("6");

    //Remover todos itens do carrinho clicando em limpar carrinho
    cy.get(".hidden > .justify-around > .bg-white").click();
    cy.get(".lg\\:flex-row > .w-full").should("not.have.descendants");
  });
});
