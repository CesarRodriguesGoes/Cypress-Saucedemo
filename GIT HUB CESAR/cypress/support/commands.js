Cypress.Commands.add("login", (username = "standard_user", password = "secret_sauce") => {
  cy.visit("/");
  cy.get('[data-test="username"]').clear().type(username);
  cy.wait(1500);
  cy.get('[data-test="password"]').clear().type(password, { log: false });
  cy.wait(1500);
  cy.get('[data-test="login-button"]').click();
  cy.wait(1500);
});
