import React from 'react';

const Star = (props) => {
  const [rating, setRating] = React.useState(2); // Default rating
  const limit = props.limit || 5; // Default limit to 5 if not provided
  const stars = Array(limit).fill("☆");

  const handleRating = (index) => {
    setRating(index + 1); // Update rating state based on clicked star
  };

  return (
    <div>
      <h1>Star Rating App</h1>
      {stars.map((star, index) => (
        <span
          key={index}
          onClick={() => handleRating(index)}
          style={{
            cursor: "pointer",
            color: index < rating ? "gold" : "gray", // Highlight selected stars
            fontSize: "24px", // Optional: Bigger stars
          }}
        >
          {star}
        </span>
      ))}
      <p>Your Rating: {rating} / {limit}</p>
    </div>
  );
};

export default Star;
