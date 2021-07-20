
describe("Check if page a title", function(){
  it("Check title", function(){

    cy.visit('/');
    cy.get("#title").should("contain", "Yet another to do List!");
  })
})

describe("Test submit bar", function(){
  it("Check if submit bar exists on page", function(){

    cy.visit('/');
    cy.get("#submitBar").should('exist');
  })
})
