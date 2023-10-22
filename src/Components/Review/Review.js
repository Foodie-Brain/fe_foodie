import React from 'react';

const Review = ({ data }) => {

  console.log(data, 'this is data in review')

  return (
    <div className='review-container'>
      {data.reviews.length ? (
        <div className='review'>
          {data.reviews.map((review) => (
            <div className='review-card' key={review.id}>
              <h2>{review.name}</h2>
              <img src={`https://be-foodie-brain-b49c609f52cc.herokuapp.com/${review.photoUrl}`} alt={review.name} className='review-pic'></img>
              <div>{review.description}</div>
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