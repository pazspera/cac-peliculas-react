import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "../components/MovieCard";

export const ClassicMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/movie/top_rated").then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <main className="container my-5">
      <div className="row my-3">
        <h1>The Hive's Classics</h1>
      </div>
      <section className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
};
