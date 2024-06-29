import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { MoviesGrid } from './components/MoviesGrid';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WatchList from './components/WatchList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/watchList">watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid />}></Route>
            <Route path="/watchList" element={<WatchList />}></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
