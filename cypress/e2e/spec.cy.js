import { LoginMethods } from "./pages/login/login.methods"
import { SignupMethods } from "./signup/signup.methods"

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'luis420'
    const contrasena = 'luis420'
    cy.visit('https://demoblaze.com/index.html')
    //cy.get('a[data-target="#logInModal"]').click()
    cy.get('a[data-target="#signInModal"]').click();
    SignupMethods.signup(usuario, contrasena);
    //LoginMethods.login(usuario, contrasena)
    //cy.get('a#nameofuser').should('contain.text', usuario)

    cy.wait(10000)
  })
})