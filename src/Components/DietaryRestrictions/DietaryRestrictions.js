const DietaryRestrictions = ({ review }) => {
  const dietaryRestrictions = Object.entries(review)
    .filter(([key, value]) => value === 1)
    .map(([key]) => {
      const formattedKey = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());
      return formattedKey;
    });

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