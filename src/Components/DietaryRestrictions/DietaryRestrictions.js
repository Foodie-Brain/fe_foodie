const DietaryRestrictions = ({ reviews }) => {
  console.log(reviews, 'reviews in DR')

  const dietaryRestrictions = []
  reviews.map((review) => 
    { 
      if (review.nutFree === 1) {
        dietaryRestrictions.push("Nut Free");
      }
      if (review.dairyFree === 1) {
        dietaryRestrictions.push("Dairy Free");
      }
      if (review.glutenFree === 1) {
        dietaryRestrictions.push("Gluten Free");
      }
      if (review.halal === 1) {
        dietaryRestrictions.push("Halal");
      }
      if (review.kosher === 1) {
        dietaryRestrictions.push("Kosher");
      }
      if (review.vegan === 1) {
        dietaryRestrictions.push("Vegan");
      }
      if (review.vegetarian === 1) {
        dietaryRestrictions.push("Vegetarian");
      }
      console.log(dietaryRestrictions, review, 'this is the dietary restrictions array')
    }
  )

  return (
    <div className="dietary-restriction-container">
      {
        dietaryRestrictions.map((restriction) => {
          return (
            <div className="dietary-restriction">
              {restriction}
            </div>
          )
        })
      }
    </div>
  )
}

export default DietaryRestrictions