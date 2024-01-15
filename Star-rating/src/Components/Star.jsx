import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    setHoverRating(0); // Reset hover rating when a star is clicked
  };

  const handleStarHover = (hoveredRating) => {
    // if (rating === 0) {
      // Only update hover rating if no star has been clicked
      setHoverRating(hoveredRating);
    // }
  };

  return (
    <div>
         <h1 className=''>Star Rating</h1>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
        className='star'
          key={star}
          onClick={() => handleStarClick(star)}
          onMouseEnter={() => handleStarHover(star)}
          onMouseLeave={() => handleStarHover(0)}
          style={{
            cursor: 'pointer',
            color: star <= (hoverRating || rating) ? 'gold' : 'gray',
          }}
        />
      ))}
    </div>
  );
};

export default StarRating;
