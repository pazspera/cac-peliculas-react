import movies from "./movies.json";
import { MovieCard } from "./MovieCard";

export const MovieGrid = () => {
  console.log(movies);
  return (
    
    <ul className="movieGrid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
