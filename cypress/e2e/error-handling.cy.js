
// Utility to match GraphQL mutation based on the operation name
const hasOperationName = (req, operationName) => {
  const { body } = req
  return (
    Object.prototype.hasOwnProperty.call(body, 'operationName') &&
    body.operationName === operationName
  )
}
// Alias query if operationName matches
const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`
  }
}
// Alias mutation if operationName matches
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

beforeEach(() => {
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
});

it('should handle a bad response', () => {
  cy.visit('http://localhost:3000');
  cy.wait('@gqlgetReviewsQuery'); // Wait for the request with the alias 'gqlgetReviewsQuery' to complete

  // Your test assertions for handling the bad response go here
  // For example, check that your application displays an error message or handles the error gracefully.
});