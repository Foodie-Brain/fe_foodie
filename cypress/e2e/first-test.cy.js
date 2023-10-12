describe('shows greeting to user', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  });


  it('should show a message on homepage', () => {
    cy.get('.App')
  })
})