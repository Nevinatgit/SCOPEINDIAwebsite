// ReviewBox.js
import React from 'react';
import './styles/Style.css'

const ReviewBox = ({ reviews }) => {
  return (
    <div className="review-box">
    
      <div className="reviews">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review">
              <h3>{review.author}</h3>
              <p>{review.text}</p>
              <div className="rating">
                {'⭐'.repeat(review.rating)} {/* Simple star rating */}
              </div>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewBox;
