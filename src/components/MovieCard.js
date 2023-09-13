import React from "react";


const MovieCard = ({ title, releaseDate, posterImageUrl }) => {
  return (
    <div>
      <div>
        <img src="./conponents/assets/poster" />
      </div>
      <div data-testid="movie-card">
        <img src={posterImageUrl} data-testid="movie-poster" />
        <h2 data-testid="movie-title">{title}</h2>
        <p data-testid="movie-release-date">{releaseDate}</p>
      </div>

      
    </div>
    
  );
};

export default MovieCard;