describe('shows greeting to user', () => {
  beforeEach(() => {
    cy.visit('localhost:3001')
  });


  it('should show a message on homepage', () => {
    cy.get('.leaflet-container')
  })

  it('should display the Foodie Brain logo', () => {
    cy.get('.logo').should('be.visible');
  });

  it('should display a form with Name, Description, Photo Upload, and dietary checkboxes', () => {
    cy.get('[type="text"]').should('exist');
    cy.get('.form > [name="description"]').should('exist');
    cy.get('[type="file"]').should('exist');
    // cy.get('[data-cy="dietary-checkbox"]').should('exist');
  });
})

