// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('dataCy', (selector) => {
    cy.get(`[data-cy=${selector}]`)
})

Cypress.Commands.add('goOnBottomModal', () => {
    cy.dataCy("image").click();
    cy.dataCy("image-modal").should(
      "have.attr",
      "src",
      "https://picsum.photos/id/301/1024/1024"
    );
    cy.dataCy("modale").scrollTo("bottom");
})