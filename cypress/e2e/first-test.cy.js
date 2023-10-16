describe('shows greeting to user', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  });


  it('should show three base elements on homepage', () => {
    cy.get('.leaflet-container')
    cy.get('form')
  })
})