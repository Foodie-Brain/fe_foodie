describe('shows greeting to user', () => {
  beforeEach(() => {
    // cy.intercept('POST', 'https://be-foodie-brain-b49c609f52cc.herokuapp.com/graphql', req => {
    //   aliasQuery(req, 'getAllRequestByArea');
    //   if(hasOperationName(req,'getAllRequestByArea')) {
    //     req.reply({ fixture: 'allRequests.json' })
    //   }
    // })
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
    cy.get('.checkboxes').should('exist');
  });

  it('should display a map', () => {
    cy.get('.leaflet-container').should('be.visible');
  });

  it('should display a list of existing reviews', () => {
    cy.get('.review-container').should('exist');
  });

  it('each existing review should have a photo, name, description', () => {
    cy.get('.review').each(($review) => {
      cy.get($review).find('img').should('be.visible');
      cy.get($review).find(':nth-child(2)').should('exist');
      cy.get($review).find(':nth-child(3)').should('exist');
      cy.get($review).find(':nth-child(4)').should('exist');
    });
  });
});
