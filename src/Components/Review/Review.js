import React from 'react';
import { useState, useEffect } from 'react';

const Review = () => {
  const [reviewData, setReviewData] = useState([]);

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
  );
};

export default Review;