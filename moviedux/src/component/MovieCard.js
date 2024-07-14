import React, { useState } from "react";
import "../styles.css";

export default function MovieCard({ movie, isWatchListed, toggleWatchList }) {
  const [slider, setSlider] = useState(false);
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };

  const handleSlider = (e) => {
    setSlider(!e.target.value);
  };

  const rating = movie.rating;
  let ratingClass = "";

  if (rating >= 7.5) {
    ratingClass = "rating-good";
  } else if (rating < 7.5 && rating >= 4) {
    ratingClass = "rating-ok";
  } else {
    ratingClass = "rating-bad";
  }

  return (
    <div className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className={ratingClass}>{movie.rating}</p>
      </div>
      <label className="switch">
        <input
          className="slider"
          type="checkbox"
          checked={isWatchListed}
          onChange={() => toggleWatchList(movie.id)}
        />
        <span className="slider">
          <span className="slider-label">
            {isWatchListed ? "In WatchList" : "Add to WatchList"}
          </span>
        </span>
      </label>
    </div>
  );
}
