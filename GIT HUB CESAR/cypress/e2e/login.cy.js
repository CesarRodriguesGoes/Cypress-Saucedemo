describe("Login - SauceDemo", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Login válido com standard_user", () => {
    cy.login();
    cy.url().should("include", "/inventory.html");
    cy.wait(1500);
    cy.contains(".title", "Products").should("be.visible");
    cy.wait(1500);
  });

  it("Exibe erro para usuário bloqueado (locked_out_user)", () => {
    cy.login("locked_out_user", "secret_sauce");
    cy.wait(1500);
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "locked out");
  });

  it("Exibe erro com credenciais inválidas", () => {
    cy.login("foo", "bar");
    cy.wait(1500);
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "do not match");
  });
});
