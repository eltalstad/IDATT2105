describe("Fill out form and submit", () => {
  it("Visits the form page, fills out form and submits", () => {
    cy.visit("http://localhost:8080/form");
    cy.get("#name").type("Petter Pettersen");
    cy.get("#email").type("petter@pettersen.no");
    cy.get("#message").type("Hello world!");
    cy.get("#submit").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Form submitted successfully");
      done();
    });
  });
});

describe("Submit button is disabled when form is not filled out", () => {
  it("Visits the form page, and checks if submit button is disabled when form is empty", () => {
    cy.visit("http://localhost:8080/form");
    cy.get("#submit").should("be.disabled");
  });
});

describe("input field works", () => {
    it("Visits the form page, and checks if input field works", () => {
        cy.visit("http://localhost:8080/form");
        cy.get("#name").type("Petter Pettersen");
        cy.get("#name").should("have.value", "Petter Pettersen");
    });
});
