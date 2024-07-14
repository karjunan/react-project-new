import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MovieGrid from "./component/MovieGrid";
import WatchList from "./component/WatchList";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<MovieGrid></MovieGrid>}></Route>
            <Route pat="/watchlist" element={<WatchList></WatchList>}></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
