describe("Cart", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit(`${Cypress.config().baseUrl}/`);
    cy.wait(2000);
    // Carregar a página inicial
    cy.contains("Verão 2025");

    // Adicionar oito itens ao carrinho
    cy.get(":nth-child(1) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(":nth-child(2) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(":nth-child(3) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(":nth-child(4) > .flex-col > .gap-2 > .bg-white").click().click();
    cy.get(".justify-around > :nth-child(2) > .flex > .text-black").contains(
      "8"
    );

    //Navegar para a página do carrinho
    cy.get(":nth-child(2) > .flex > div > .mx-2").click();
    cy.url().should("be.equal", `${Cypress.config().baseUrl}/cart`);
  });
  it("Finish order", () => {
    //Finalizar pedido
    cy.get('.hidden > .justify-around > [type="button"] > .px-8').click();
    cy.get("#base-ui-\\:r7\\: > .text-lg").contains("Você concluiu o pedido!");
    cy.get("#base-ui-\\:r7\\: > :nth-child(3) > button > .undefined").click();
    cy.get(".lg\\:flex-row > .w-full").should("not.have.descendants");
  });

  it("Add and remove items from cart", () => {
    //Remover um item do carrinho clicando no seletor de quantidade
    cy.get(":nth-child(1) > .flex-col > .w-16 > .text-3xl").click();
    cy.get(".justify-around > :nth-child(2) > .flex > .text-black").contains(
      "7"
    );

    //Remover dois itens do carrinho clicando no botão de lixeira
    cy.get(":nth-child(2) > .flex-col > .cursor-pointer").click().click();
    cy.get(".justify-around > :nth-child(2) > .flex > .text-black").contains(
      "5"
    );

    //Remover todos itens do carrinho clicando em limpar carrinho
    cy.get(".hidden > .justify-around > .bg-white").click();
    cy.get(".lg\\:flex-row > .w-full").should("not.have.descendants");
  });
});
