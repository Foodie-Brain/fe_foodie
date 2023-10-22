import React from 'react';
import DietaryRestrictions from '../DietaryRestrictions/DietaryRestrictions';

const Review = ({ data }) => {

  return (
    <div className='review-container'>
      {data.reviews.length ? (
        <div className='review'>
          {data.reviews.map((review) => 
            { 
              return (
                <div className='review-card' key={review.id}>
                  <h2>{review.name}</h2>
                  <img src={`https://be-foodie-brain-b49c609f52cc.herokuapp.com/${review.photoUrl}`} alt={review.name} className='review-pic'></img>
                  <div className='review-description'>{review.description}</div>
                  <DietaryRestrictions review={review}/>
                </div>
              )
            }
          )}
        </div>
      ) : (
        <div>Loading reviews...</div>
      )}
    </div>
  );
};

export default Review;