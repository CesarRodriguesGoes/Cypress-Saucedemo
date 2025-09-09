describe("Checkout completo", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Compra 1 item com sucesso", () => {
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.wait(1500); 
    cy.get(".shopping_cart_link").click();
    cy.wait(1500);
    cy.get('[data-test="checkout"]').click();
    cy.wait(1500);

    cy.get('[data-test="firstName"]').type("Cesar");
    cy.wait(1500);
    cy.get('[data-test="lastName"]').type("Goes");
    cy.wait(1500);
    cy.get('[data-test="postalCode"]').type("12345");
    cy.wait(1500);
    cy.get('[data-test="continue"]').click();
    cy.wait(1500);

    cy.get('[data-test="finish"]').click();
    cy.wait(1500);
    cy.get(".complete-header").should("contain", "Thank you for your order");
  });
});
