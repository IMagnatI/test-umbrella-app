// https://on.cypress.io/api

describe('Testing existing page elements', () => {
  it('Load Filters', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.contains('.c-filters', 'Kraj źródłowy')
    cy.contains('.c-filters', 'Kraj docelowy')
  })
  it('Load Table', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.contains('.c-homeTable', 'Kraj źródłowy')
    cy.contains('.c-homeTable', 'Kraj docelowy')
    cy.get('.elementToTests')
      .first()
      .should('satisfy', ($el) => {
        const classList = Array.from($el[0].classList)
        return classList.includes('c-rate') // passes
      })
  })
})
