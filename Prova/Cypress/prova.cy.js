function selecionarUser() {
  const nomes = [
    "Hermoine Granger",
    "Harry Potter",
    "Ron Weasly",
    "Albus Dumbledore",
    "Neville Longbottom"
  ];

  const indiceAleatorio = Math.floor(Math.random() * nomes.length);
  const info = nomes[indiceAleatorio];
  return info;
}

describe('Prova', () => {
  it('Entrando na conta com sucesso', () => {
    const usuario = selecionarUser(); // pega um usuário aleatório

    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select(usuario)
    cy.get('form.ng-valid > .btn').click()
    cy.get('.fontBig').should('contain.text', usuario)
  })

  it('Fazendo um depósito', () => {
    const valorDeposito = Math.floor(Math.random() * 1000) + 1; // valor aleatório entre 1 e 1000
    const usuario = selecionarUser();
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    cy.get('.borderM > :nth-child(1) > .btn').click();
    cy.get('#userSelect').select(usuario);
    cy.get('form.ng-valid > .btn').click();
    cy.get('.fontBig').should('contain.text', usuario);
    cy.get('[ng-class="btnClass2"]').click();
    cy.get('.form-control').type(valorDeposito);
    cy.get('form.ng-dirty > .btn').click();
    cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('contain.text', valorDeposito);

  })

  it('Fazendo um saque com erro', () => {
    const saque = 1000;
    const usuario = selecionarUser();
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    cy.get('.borderM > :nth-child(1) > .btn').click();
    cy.get('#userSelect').select(usuario);
    cy.get('form.ng-valid > .btn').click();
    cy.get('.fontBig').should('contain.text', usuario);
    cy.get('[ng-class="btnClass3"]').click();
    cy.get('.form-control').type(saque);
    cy.get('form.ng-dirty > .btn').click();
    cy.get('.error').should('contain.text', 'Transaction Failed. You can not withdraw amount more than the balance.');  
    
  })
})