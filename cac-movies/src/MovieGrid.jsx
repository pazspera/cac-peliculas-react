import movies from "./movies.json";
import { MovieCard } from "./MovieCard";

export const MovieGrid = () => {
  console.log(movies);
  return (
    <section className="row row-cols-1 row-cols-md-3 g-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};
