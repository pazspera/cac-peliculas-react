import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";

export const RecommendedCardGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/movie/popular").then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <section className="container my-5">
      <div className="row">
        <div className="col">
          <h2>Our Queen Bee’s Daily Picks</h2>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-lg-3">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>
    </section>
  );
};
