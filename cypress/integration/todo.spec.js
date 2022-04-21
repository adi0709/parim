/// <reference types= "cypress" />

import Elements from "./PageObjects/Elements";

describe("Test TODO application", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Validate if the add todo input and button are visible", () => {
    Elements.validateTodoInput();
  });
  it("saving without typing  todo doesn't work", () => {
    Elements.emptyTodoClick();
  });
  it("can add new todo elements", () => {
    Elements.addTodoItem("Start Testing");
  });
  it("can remove the todo elements", () => {
    Elements.addTodoItem("Start Testing");
    Elements.removeTodoItem();
  });
});
