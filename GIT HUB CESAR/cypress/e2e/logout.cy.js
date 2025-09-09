describe("Logout", () => {
  it("Faz logout pelo menu lateral", () => {
    cy.login();
    cy.wait(1500);
    cy.get("#react-burger-menu-btn").click();
    cy.wait(1500);
    cy.get("#logout_sidebar_link").should("be.visible").click();
    cy.wait(1500);
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
  });
});
