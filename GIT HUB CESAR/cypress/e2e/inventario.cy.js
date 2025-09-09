describe("Listagem e Carrinho", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Adiciona itens e valida badge do carrinho", () => {
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.wait(1500);
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.wait(1500);
    cy.get(".shopping_cart_badge").should("have.text", "2");
    cy.wait(1500);

    cy.get(".shopping_cart_link").click();
    cy.wait(1500);
    cy.url().should("include", "/cart.html");
    cy.wait(1500);
    cy.contains(".cart_item", "Sauce Labs Backpack").should("be.visible");
    cy.contains(".cart_item", "Sauce Labs Bike Light").should("be.visible");
  });
})