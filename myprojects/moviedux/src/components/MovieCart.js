import React from 'react';
import '../styles.css';

export default function MovieCart({ movie }) {
  const onErrorhandler = (e) => {
    e.target.src = 'images/default.jpg';
  };

  const getMovieRating = (rating) => {
    if (rating >= 8) {
      return 'rating-good';
    } else if (rating >= 5) {
      return 'rating-ok';
    } else {
      return 'rating-bad';
    }
  };
  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={onErrorhandler}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-tile">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className={`movie-card-rating ${getMovieRating(movie.rating)}`}>
          {movie.rating}
        </p>
      </div>
    </div>
  );
}
