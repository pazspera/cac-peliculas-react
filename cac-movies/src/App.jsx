import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LandingPage } from "./views/LandingPage";
import { MovieDetail } from "./views/MovieDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmarksLines } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(faXmarksLines);

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top bg-dark" data-bs-theme="dark">
          <div className="container">
            <Link to="/">
              <FontAwesomeIcon icon={faXmarksLines} className="me-2" />
              <span>Movie Hive</span>
            </Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="movie/:movieId" element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
