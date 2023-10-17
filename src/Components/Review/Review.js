import React from 'react'
import { useState, useEffect } from 'react';


const Review = () => {
  const [reviewData, setReviewData] = useState(null)

  useEffect(() => {
  fetch('https://be-foodie-brain-b49c609f52cc.herokuapp.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: '{ reviews { name description lat lon } }' }),
    
  })
  .then(res => {console.log('ahhhhh', res)})
  .then((data) =>  {
   setReviewData(data)
})
}, [])
  return (
    <div>
  {reviewData ? (
    <div>
      {reviewData.reviews.map((review, index) => (
        <div key={index}>
          <div>Name: {review.name}</div>
          <div>Description: {review.description}</div>
          <div>Lat: {review.lat}</div>
          <div>Lon: {review.lon}</div>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  )}
</div>
  )
}

export default Review