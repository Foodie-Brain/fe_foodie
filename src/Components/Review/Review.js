import React from 'react';

const Review = ({ data }) => {

  console.log(data, 'this is data in review')

  return (
    <div className='review-container'>
      {data.reviews.length ? (
        <div className='review'>
          {data.reviews.map((review) => (
            <div className='review-card' key={review.id}>
              <img src={`https://be-foodie-brain-b49c609f52cc.herokuapp.com/${review.photoUrl}`} alt={review.name} className='review-pic'></img>
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