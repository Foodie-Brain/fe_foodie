import React from 'react';
import DietaryRestrictions from '../DietaryRestrictions/DietaryRestrictions';

const Review = ({ data }) => {

  console.log(data, 'this is data in review')

  // for each object review in the data.reviews array
  // we need to check each key for values of 1 
  // if the value is 1, push into a new array
  // this new array can be rendered in the card

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
                  <DietaryRestrictions reviews={data.reviews}/>
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