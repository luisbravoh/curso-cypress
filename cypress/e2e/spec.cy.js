import { LoginMethods } from "./pages/login/login.methods"
import { SignupMethods } from "./pages/signup/signup.methods"
import { Logger } from "./util/logger"

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'luis420'
    const contrasena = 'luis420'
   
    Logger.stepNumber(1)
    Logger.step('Navigate to demoblaze page')
    cy.visit('https://demoblaze.com/index.html')

    Logger.stepNumber(2)
    Logger.step('Click on Login')
    cy.get('a[data-target="#logInModal"]').click();

    Logger.stepNumber(3)
    Logger.step(`Login with this credentials: ${usuario}/${contrasena}`)
    LoginMethods.login(usuario, contrasena)
    Logger.verification(`The home should show "Welcome ${usuario} text`)
    cy.get('a#nameofuser').should('contain.text', usuario)
    //cy.get('a[data-target="#logInModal"]').click()
    
    

    cy.wait(10000)
  })
})