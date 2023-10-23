import React from 'react';
import DietaryRestrictions from '../DietaryRestrictions/DietaryRestrictions';
import PropTypes from 'prop-types';

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
                  <DietaryRestrictions review={review}/>
                  <img src={`https://be-foodie-brain-b49c609f52cc.herokuapp.com/${review.photoUrl}`} alt={review.name} className='review-pic'></img>
                  <div className='review-description'>{review.description}</div>
                </div>
              )
            }
          )}
        </div>
      ) : (
        <div>No reviews yet :(</div>
      )}
    </div>
  );
};

export default Review;

Review.propTypes = {
  data: PropTypes.object.isRequired
};