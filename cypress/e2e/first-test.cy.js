import { GET_REVIEWS, POST_REVIEW } from "../../src/utils";

const hasOperationName = (req, operationName) => {
  const { body } = req
  return (
    Object.prototype.hasOwnProperty.call(body, 'operationName') &&
    body.operationName === operationName
  )
}
const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`
  }
}
const aliasMutation = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`
  }
}
describe('shows greeting to user', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://be-foodie-brain-b49c609f52cc.herokuapp.com/graphql', req => {
        aliasQuery(req, 'getReviews');
        if(hasOperationName(req,'getReviews')) {
          req.reply({ fixture: 'reviews.json' })
        }
      })
      cy.visit('http://localhost:3000')
    });


it('should show a message on the homepage', () => {
  cy.visit('http://localhost:3000');
  cy.wait('@gqlgetReviewsQuery');
  cy.get('.leaflet-container');
});

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

  describe('Form User Story', () => {
      it('should submit a new review and display it at the top of the list', () => {
        cy.get(':nth-child(1) > h2')
        cy.get(':nth-child(1) > .review-pic')
        cy.get(':nth-child(1) > .review-description')
        cy.get('button[type="submit"]').click();
        cy.wait(5000);
        cy.get(':nth-child(1) > h2')
        cy.get(':nth-child(1) > .review-pic')
        cy.get(':nth-child(1) > .review-description')
      });
    });
    
    describe('Form Sad Path', () => { 
      it('should show an error message for incomplete form submission', () => {
        cy.get('button[type="submit"]').click();
        cy.get('.error-container').should('exist')
      });
    });

    describe('Map', () => {
      it('should display map pins for existing reviews', () => {
        cy.get('.leaflet-container')
      });
    });
  });