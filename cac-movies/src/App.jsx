import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LandingPage } from "./views/LandingPage";
import { MovieDetail } from "./views/MovieDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <Link to="/">
              <span>Movie Hive</span>
            </Link>
          </div>
        </nav>
      </header>
      <main className="container my-5">
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="movie/:movieId" element={<MovieDetail />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
