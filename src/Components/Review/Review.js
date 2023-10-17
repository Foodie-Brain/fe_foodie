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
      body: JSON.stringify({ query: '{ reviews { id name description } }' }), 
    })
    .then((response) => response.json())
    .then((data) => {
      const reviews = data.data.reviews;
      console.log(reviews)
      setReviewData(reviews);
    })
  }, [])

  return (
    <div className='review-container'>
      {reviewData.length ? (
        <div className='review'>
          {reviewData.map((review) => (
            <div className='review-card' key={review.id}>
              <div>Name: {review.name}</div>
              <div>Description: {review.description}</div>
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