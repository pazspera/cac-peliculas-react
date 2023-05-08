import { MovieGrid } from "./components/MovieGrid";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Link to="/">
          <h1>Movies</h1>
        </Link>
      </header>
      <main className="container my-5">
        <Routes>
          <Route path="/" element={<MovieGrid />}></Route>
          <Route path="movie/:movieId" element="Movie Details view"></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
