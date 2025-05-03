/// <reference = cypress>

describe("Teste de criação de login", () => {
  it.skip("Criar usuario com sucesso", () => {
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Login')
    cy.get('#Text1').type('Login')
    cy.get('#username').type('Login')
    cy.get('#password').type('Login')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain', 'Registration successful')
  })


  it.skip("Criar usuario com falha", () => {
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Login')
    cy.get('#Text1').type('Login')
    cy.get('#username').type('Login')
    cy.get('.btn-primary').should('be.disabled')
  })

  it.skip("Criar login com sucesso", () => {
    let info = login()
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', info[0])
  })

  it("Criar login deletar e tentar fazer login com o mesmo, e nao conseguir", () => {
    let info = login()
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', info[0])
    cy.get('.ng-binding > a').click()
    cy.get('.btn').click()
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Username or password is incorrect')
  })


})

function login() {
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let ID = hora + minuto + seg + "ID"
  let senha = hora + minuto + seg + "Senha"
  let info = [ID, senha]

  cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
  cy.get('.btn-link').click()
  cy.get('#firstName').type(ID)
  cy.get('#Text1').type(ID)
  cy.get('#username').type(ID)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain', 'Registration successful')
  
  return info
}