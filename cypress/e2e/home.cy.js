describe('Inco Login', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000/')
  })
  it('frontpage can be opened', () => {
    cy.contains('SOY ESTUDIANTE')
    cy.contains('SOY PROFESOR')
  })

  it('login', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[type="email"]').click()
    cy.get('[type="password"]').click()
    cy.get('input:first').type('laura@inco.com')
    cy.get('input:last').type('123')
    cy.contains('Enviar').click()
  })
})
