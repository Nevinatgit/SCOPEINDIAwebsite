import React, { useState } from 'react';
import ReviewBox from './ReviewBox';
import './styles/Style.css';

const ReviewSlider = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerSlide = 3;
  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Function to get the reviews for the current slide
  const getCurrentSlideReviews = () => {
    const start = currentIndex * reviewsPerSlide;
    const end = start + reviewsPerSlide;
    return reviews.slice(start, end);
  };

  console.log('Current Index:', currentIndex);
  console.log('Total Slides:', totalSlides);
  console.log('Reviews for Current Slide:', getCurrentSlideReviews());

  return (
    <div className="slider-container">
      <button className="prev" onClick={prevSlide}>❮</button>
      <div className="slider-wrapper">
        <div
          className="slider"
          style={{ transform: `translateX(-${10*currentIndex}px)`, transition: 'transform 0.5s ease-in-out' }}
        >
          {
            <div className="slide">
              {getCurrentSlideReviews().map((review, index) => (
                <div key={index} className="review-box-wrapper">
                  <ReviewBox reviews={[review]} />
                </div>
              ))}
            </div>
        }
        </div>
      </div>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default ReviewSlider;
