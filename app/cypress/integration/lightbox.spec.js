/// <reference types="cypress" />
context("light box component!", () => {
  beforeEach(() => {
    cy.visit("../../lightbox-component.html");
  });

//   it("title should be Lightbox", () => {
//     cy.dataCy("title-lightBox").should("have.text", "Lightbox");
//     cy.dataCy("title-h2").should("have.text", "Alpine JS & Tailwind CSS");
//   });
//   it("img should be", () => {
//     cy.dataCy("image").should(
//       "have.attr",
//       "src",
//       "https://picsum.photos/id/301/1024/1024"
//     );
//   });

//   it("clic on img btn shows new interfaces", () => {
//     cy.dataCy("image").click();
//     cy.dataCy("image-modal").should(
//       "have.attr",
//       "src",
//       "https://picsum.photos/id/301/1024/1024"
//     );
//     cy.dataCy("username").should("have.text", "sylent");
//   });

  it("check like and dislike actions", () => {
    cy.goOnBottomModal();
    cy.dataCy("like-btn").click();
    cy.dataCy("likes-count").should("have.text", "1");
    cy.dataCy("close-modal").click();
    cy.dataCy("image").should(
      "have.attr",
      "src",
      "https://picsum.photos/id/301/1024/1024"
    );
    cy.dataCy("image-modal").trigger("mouseover");
    cy.dataCy("likes-count").should("have.text", "1");
    cy.goOnBottomModal();
    cy.dataCy("dislike-btn").click();
    cy.dataCy("likes-count").should("have.text", "0");
    cy.dataCy("close-modal").click();
    cy.dataCy("overlay").trigger("mouseover");
    cy.dataCy("likes-count").should("have.text", "0");
  });

  it("test comments", () => {
    cy.goOnBottomModal();
    cy.dataCy("submit-btn").should('be.disabled');
    cy.dataCy('comment-input').type("Hello World");
    cy.dataCy("submit-btn").click();
    cy.dataCy("comment-text").should("have.text", "Hello World");
    cy.dataCy("comment-name").should("have.text", "johndoe");
    cy.dataCy("display-comment").click();
    cy.dataCy("invisible-comment").should('have.css', 'display', 'none');
    cy.dataCy("display-comment").click();
    cy.dataCy("invisible-comment").should('not.have.css', 'display', 'none');
    cy.dataCy("modale").scrollTo("top");
    cy.dataCy("close-modal").click();
    cy.dataCy("overlay").trigger("mouseover");
    cy.dataCy("comments-count").should("have.text", "1");
    cy.get("body").click(0, 0)
    cy.goOnBottomModal();
    cy.dataCy("display-comment").click();
  });
});
