import React from 'react';

const Review = ({ data }) => {

  return (
    <div className='review-container'>
      {data.reviews.length ? (
        <div className='review'>
          {data.reviews.map((review) => (
            <div className='review-card' key={review.id}>
              <div>Name: {review.name}</div>
              <div>Description: {review.description}</div>
              <div>Latitude: {review.lat}</div>
              <div>Longitude: {review.lng}</div>
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