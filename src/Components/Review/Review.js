import React from 'react'
import { useState, useEffect } from 'react';

const Review = () => {
  const [reviewData, setReviewData] = useState([])

  useEffect(() => {
    fetch('https://be-foodie-brain-b49c609f52cc.herokuapp.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: '{ reviews { name description lat lon } }' }), 
    })
    .then((response) => response.json())
    .then((data) => {
      const reviews = data.data.reviews;
      setReviewData(reviews);
      console.log(reviewData)
    })
  }, [])

  return (
    <div className='reviews'>
      {reviewData ? (
        <div className='existing-reviews'>
          {reviewData.map((review, index) => (
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