import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";

export const PosterGrid = (props) => {
  const [movies, setMovies] = useState([]);
  const route = props.route;

  useEffect(() => {
    get(route).then((data) => {
      console.log(data);
      const selectedResults = data.results.slice(6, 12);
      console.log("selected results", selectedResults);
      setMovies(selectedResults);
    });
  }, [route]);

  return (
    <section className="container my-5">
      <div className="row">
        <div className="col my-3">
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-6 g-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>
    </section>
  );
};
