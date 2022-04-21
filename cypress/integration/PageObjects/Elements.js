/// <reference types= "cypress" />

class Elements {
  validateTodoInput() {
    cy.get("input")
      .invoke("attr", "placeholder")
      .should("contain", "Type your todo here...");
    cy.get("input").should("exist").and("be.visible");
    cy.get("button").should("exist").and("be.visible");
  }
  emptyTodoClick() {
    cy.get("input").invoke("val").should("be.empty");
    cy.get("button").click();
    cy.get("li").should("not.exist");
  }
  addTodoItem($txt) {
    const newItem = $txt;
    cy.get("input").type(`${newItem}{enter}`);
    cy.get("li").should("have.length", "1");
    cy.get("span").should(`have.text`, `${newItem}`);
    cy.get(".App-tick").should("be.visible");
  }
  removeTodoItem() {
    cy.get(".App-tick").click();
    cy.get("li").should("not.exist");
  }
}
module.exports = new Elements();
