import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [selectRating, setSelectRating] = useState("all");
  const [selectGenre, setSelectGenre] = useState("all");

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse);
      });
  }, []);

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    const searchFilter = movie.title.toLowerCase().includes(searchItem);
    const genreFilter =
      selectGenre === "all" ? true : movie.genre === selectGenre ? true : false;
    const ratingFilter = () => {
      if (movie.rating >= 7.5 && selectRating === "good") {
        return true;
      } else if (
        movie.rating >= 4 &&
        movie.rating < 7.5 &&
        selectRating === "average"
      ) {
        return true;
      } else if (
        movie.rating >= 1 &&
        movie.rating < 4 &&
        selectRating === "bad"
      ) {
        return true;
      } else if (selectRating === "all") {
        return true;
      } else {
        return false;
      }
    };
    return searchFilter && genreFilter && ratingFilter();
  });
  const handleSelectRating = (e) => {
    setSelectRating(e.target.value);
  };

  const handleSelectGenre = (e) => {
    setSelectGenre(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={searchItem}
        placeholder="Search movies "
        onChange={handleInputChange}
        className="search-input"
      />
      <label>Rating</label>
      <select value={selectRating} onChange={handleSelectRating}>
        <option value="all">All</option>
        <option value="good">Good</option>
        <option value="average">Average</option>
        <option value="bad">Bad</option>
      </select>
      <label>Genre</label>
      <select value={selectGenre} onChange={handleSelectGenre}>
        <option value="all">All</option>
        <option value="fantasy">Fantasy</option>
        <option value="drama">Drama</option>
        <option value="horror">Horror</option>
        <option value="Action">Action</option>
      </select>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>
    </>
  );
}
