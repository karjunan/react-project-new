import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import "./styles.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MovieGrid from "./component/MovieGrid";
import Watchlist from "./component/WatchList";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  console.log("Watch list => " + watchList);
  const toggleWatchList = (movieId) => {
    setWatchList((prev) => {
      return prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId];
    });
  };
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">movie</Link>
              </li>
              <li>
                <Link to="/watchlist">watchlist</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <MovieGrid
                  movies={movies}
                  watchList={watchList}
                  toggleWatchList={toggleWatchList}
                ></MovieGrid>
              }
            ></Route>
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  movies={movies}
                  watchList={watchList}
                  toggleWatchList={toggleWatchList}
                ></Watchlist>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
