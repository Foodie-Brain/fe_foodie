import { useQuery, gql } from '@apollo/client';

const GET_REVIEWS = gql`
  query getReviews {
    reviews {
      id
      name
      description
      photoUrl
      lat
      lng
      dairyFree
      glutenFree
      halal
      kosher
      nutFree
      vegan
      vegetarian
    }
  }
`;

const POST_REVIEW = gql`
  mutation CreateReview(
    $name: String!
    $photo: Upload
    $description: String!
    $lat: String!
    $lng: String!
    $dairyFree: Int = 0
    $glutenFree: Int
    $halal: Int
    $kosher: Int
    $nutFree: Int
    $vegan: Int
    $vegetarian: Int
  ) {
    createReview(
      input: {
        name: $name
        photo: $photo
        description: $description
        lat: $lat
        lng: $lng
        dairyFree: $dairyFree
        glutenFree: $glutenFree
        halal: $halal
        kosher: $kosher
        nutFree: $nutFree
        vegan: $vegan
        vegetarian: $vegetarian
      }
    ) {
      id
      photoUrl
      name
      description
      dairyFree
      glutenFree
      halal
      kosher
      nutFree
      vegan
      vegetarian
      lat
      lng
    }
  }
`;

export { GET_REVIEWS, POST_REVIEW }
