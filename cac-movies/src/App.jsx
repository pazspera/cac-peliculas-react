import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./views/LandingPage";
import { MovieDetail } from "./views/MovieDetail";
import { GenreList } from "./components/GenreList";
import { NavBar } from "./components/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmarksLines } from "@fortawesome/free-solid-svg-icons";
import "./App.css";


library.add(faXmarksLines);

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="movie/:movieId" element={<MovieDetail />}></Route>
        <Route path="genre/:genreId/movie/list" element={<GenreList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
