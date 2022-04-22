/// <reference types="cypress" />
context("Hello World!", () => {
  beforeEach(() => {
    cy.visit("../../index.html");
  });

  it("p should have text Hello World!", () => {
    cy.get("p.hello").should("have.text", "Hello World!");
  });

  it("p should return ccc if aaa is the text and 2 is the key", () => {
    cy.get("[data-cy=key]").clear().type(2);
    cy.get("[data-cy=textToCrypt]").type("aaa");
    cy.get("[data-cy=cypherBtn]").click();
    cy.get("[data-cy=result]").should("have.text", "ccc");
  });

  it("p should return ccc if aaa is the text and 2 is the key", () => {
    cy.dataCy('key').clear().type(2);
    cy.dataCy('textToCrypt').type("aaa");
    cy.dataCy('cypherBtn').click();
    cy.dataCy('result').should("have.text", "ccc");
  });
});
