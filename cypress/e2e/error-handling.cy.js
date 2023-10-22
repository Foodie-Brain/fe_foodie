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

// beforeEach(() => {
//   cy.intercept('POST', 'https://be-foodie-brain-b49c609f52cc.herokuapp.com/graphql', req => {
//     aliasQuery(req, 'getReviews');
//     if (hasOperationName(req, 'getReviews')) {
//       req.reply({ fixture: 'reviews.json' });
//     }
//   });
// });

// it('should show a message on the homepage', () => {
//   cy.visit('http://localhost:3000');
//   cy.wait('@gqlgetReviewsQuery'); // Wait for the request with the alias 'graphqlRequest' to complete
//   // Your test assertions here
//   cy.get('.leaflet-container');
// });

it.only('should handle a 500 level response', () => {
  cy.intercept('POST', 'https://be-foodie-brain-b49c609f52cc.herokuapp.com/graphql', req => {
    aliasQuery(req, 'getReviews');
    if (hasOperationName(req, 'getReviews')) {
      req.reply({
        statusCode: 500, // Simulate a server error (you can use other error status codes)
        body: {
          errors: [
            {
              message: 'Server error message', // Provide an error message
              // Add any other error details if needed
            },
          ],
        },
      });
    }
  });
  cy.visit('http://localhost:3000');
  cy.wait('@gqlgetReviewsQuery'); // Wait for the request with the alias 'gqlgetReviewsQuery' to complete
  cy.get('.error-container')
  cy.get('.error-pic')
  cy.get('.error-message').contains('Response not successful: Received status code 500')
});

it('should handle a 400 level response', () => {
  cy.intercept('POST', 'https://be-foodie-brain-b49c609f52cc.herokuapp.com/graphql', req => {
    aliasQuery(req, 'getReviews');
    if (hasOperationName(req, 'getReviews')) {
      req.reply({
        statusCode: 400, // Simulate a server error (you can use other error status codes)
        body: {
          errors: [
            {
              message: 'Server error message', // Provide an error message
              // Add any other error details if needed
            },
          ],
        },
      });
    }
  });
  cy.visit('http://localhost:3000');
  cy.wait('@gqlgetReviewsQuery'); // Wait for the request with the alias 'gqlgetReviewsQuery' to complete
  cy.get('.error-container')
  cy.get('.error-pic')
  cy.get('.error-message').contains('Response not successful: Received status code 400')
});

it('should handle a bad form error', () => {
  cy.intercept('POST', 'https://be-foodie-brain-b49c609f52cc.herokuapp.com/graphql', req => {
    aliasQuery(req, 'getReviews');
    if (hasOperationName(req, 'getReviews')) {
      req.reply({ fixture: 'reviews.json' });
    }
  });
  cy.visit('http://localhost:3000');
})