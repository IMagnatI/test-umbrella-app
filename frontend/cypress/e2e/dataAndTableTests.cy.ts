describe('Testing operation data', () => {
  it('Contain data', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.get('.elementToTests input').should(($input) => {
      const val = $input.val()
      expect(val).to.be.equal('10.00')
    })
  })

  it('Filling good data', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.get('.elementToTests input')
      .first()
      .click()
      .should(($input) => {
        $input.val('')
      })
      .type('88')
      .then(() => {
        cy.wait(2000)
        cy.get('.elementToTests')
          .first()
          .should('satisfy', ($el) => {
            const classList = Array.from($el[0].classList)
            return !classList.includes('border-red-500') // passes
          })
      })
  })

  it('Filling with larger value than allowed.', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.get('.elementToTests input')
      .first()
      .click()
      .should(($input) => {
        $input.val('')
      })
      .type('101')
      .then(() => {
        cy.wait(2000)
        cy.get('.elementToTests')
          .first()
          .should('satisfy', ($el) => {
            const classList = Array.from($el[0].classList)
            return classList.includes('border-red-500') // passes
          })
      })
  })

  it('Filling with smaller value than allowed.', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.get('.elementToTests input')
      .first()
      .click()
      .should(($input) => {
        $input.val('')
      })
      .type('-3')
      .then(() => {
        cy.wait(2000)
        cy.get('.elementToTests')
          .first()
          .should('satisfy', ($el) => {
            const classList = Array.from($el[0].classList)
            return classList.includes('border-red-500') // passes
          })
      })
  })
})

describe('Testing table reactions', () => {
  it('Check active element', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.get('.elementToTests input')
      .first()
      .click()
      .then(() => {
        cy.wait(2000)
        cy.get('.elementToTests')
          .first()
          .should('satisfy', ($el) => {
            const classList = Array.from($el[0].classList)
            return classList.includes('bg-gray-100') // passes
          })
      })
  })

  it('Check active col', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.get('.elementToTests input')
      .first()
      .click()
      .then(() => {
        cy.wait(2000)
        cy.get('#col_BG_2')
          .first()
          .should('satisfy', ($el) => {
            const classList = Array.from($el[0].classList)
            return classList.includes('bg-gray-100') // passes
          })
      })
  })

  it('Check active row', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.get('.elementToTests input')
      .first()
      .click()
      .then(() => {
        cy.wait(2000)
        cy.get('#row_AT_0')
          .first()
          .should('satisfy', ($el) => {
            const classList = Array.from($el[0].classList)
            return classList.includes('bg-gray-100') // passes
          })
      })
  })
})
