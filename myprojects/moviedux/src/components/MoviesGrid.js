import React, { useState, useEffect } from 'react';
import '../styles.css';
import MovieCart from './MovieCart';

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('All Genre');
  const [rating, setRating] = useState('All');

  useEffect(() => {
    fetch('movies.json')
      .then((respose) => respose.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };
  const handleRatingsChange = (e) => {
    setRating(e.target.value);
  };

  const filterGenre = (movie, genre) =>
    genre === 'All Genre' || genre.toLowerCase() === movie.genre.toLowerCase();

  const filterSearch = (movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase());

  const filterRating = (movie, rating) => {
    if (rating === 'All') return true;
    else if (rating === 'Good' && movie.rating >= 8) {
      return true;
    } else if (rating === 'Ok' && movie.rating >= 5 && movie.rating < 8) {
      return true;
    } else if (rating === 'Bad' && movie.rating >= 1 && movie.rating < 5) {
      return true;
    }
    return false;
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      filterRating(movie, rating) &&
      filterGenre(movie, genre) &&
      filterSearch(movie)
    );
  });

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies ..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genre</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Ratings</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingsChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((m) => (
          <MovieCart movie={m} key={m.title}></MovieCart>
        ))}
      </div>
    </div>
  );

  // return (
  //   <div className="movies-grid">
  //     {movies.map((movie) => (
  //       <div key={movie.id} className="movie-card">
  //         <img src={`images/${movie.image}`} alt={movie.title} />
  //         <div className="movie-card-info">
  //           <h3 className="movie-card-tile">{movie.title}</h3>
  //           <p className="movie-card-genre">{movie.genre}</p>
  //           <p className="movie-card-rating">{movie.rating}</p>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
}
