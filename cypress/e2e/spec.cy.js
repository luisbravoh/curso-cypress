import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'luis42'
    const contrasena = 'luis42'
    cy.visit('https://demoblaze.com/index.html')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login(usuario, contrasena)
    cy.get('a#nameofuser').should('contain.text', usuario)

    cy.wait(10000)
  })
})