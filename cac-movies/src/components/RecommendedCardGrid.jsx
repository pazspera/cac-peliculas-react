import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieImageCard } from "./MovieImageCard";
import "./RecommendedCardGrid.css";

export const RecommendedCardGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/movie/popular").then((data) => {
      const selectedResults = data.results.slice(0, 12);
      setMovies(selectedResults);
    });
  }, []);

  return (
    <section className="recommended-grid py-3">
      <div className="container my-5 ">
        <div className="row">
          <div className="col my-3">
            <h2>Our Queen Bee’s Latest Picks</h2>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {movies.map((movie) => (
            <MovieImageCard key={movie.id} movie={movie}></MovieImageCard>
          ))}
        </div>
      </div>
    </section>
  );
};
