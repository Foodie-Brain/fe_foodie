describe('shows greeting to user', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  });

  it('should show a message on homepage', () => {
    cy.get('.leaflet-container')
  })

// The code below will work once the cypressUtils.js variables are imported and implemented into this test file
// it('should show a message on the homepage', () => {
//   cy.visit('http://localhost:3000');
//   cy.wait('@gqlgetReviewsQuery'); // Wait for the request with the alias 'graphqlRequest' to complete
//   // Your test assertions here
//   cy.get('.leaflet-container');
// });
})