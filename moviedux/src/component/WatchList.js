import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ movies, watchList, toggleWatchList }) {
  return (
    <>
      <div className="movies-grid">
        {movies
          .filter((movie) => watchList.includes(movie.id))
          .map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isWatchListed={watchList.includes(movie.id)}
              toggleWatchList={toggleWatchList}
            ></MovieCard>
          ))}
      </div>
    </>
  );
}
