// import movies from "../movies.json";
import { get } from "../utils/httpClient.js";
import { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";

export const MovieGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <main className="container my-5">
      <section className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
};
