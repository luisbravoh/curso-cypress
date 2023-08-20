export class CommonPageElements {
  static get topMenu() {
    return {
      get home() {
        return cy.get("a", "Home");
      },
      get contact() {
        return cy.get("a", "Contact");
      },
      get aboutUs() {
        return cy.get("a", "About us");
      },
      get cart() {
        return cy.get("a", "Cart");
      },
      get logIn() {
        return cy.get("a", "Log in");
      },
      get signUp() {
        return cy.get("a", "Sign up");
      },
    };
  }
}
