describe('anunciaTec E2E Tests', () => {
  beforeEach('passes', () => {
    cy.visit('http://javiermf.rocks/')
  })
  it('Tes1. Should visit the main page', () => {

  })

  it('Test2. Find all elements', () => {
    cy.get('#textfield')
    cy.get('#button')
    cy.get('#typography')
  })

  it('Test3. Enter text and press button', () => {
    cy.get('#textfield').type('cypress test')
    cy.get('#button').click()
  })

  it('Test4. Type a longer text than accepted', () => {
    cy.get('#textfield').type('thistextislongerthantheamountaccepted')
    cy.get('#button').click()
  })

  it('Test5. Submit empty text', () => {
    cy.get('#button').click()
  })

  it('Test6. Type text and add numbers', () => {
    cy.get('#textfield').type('text and 1')
    cy.get('#button').click()
  })
})