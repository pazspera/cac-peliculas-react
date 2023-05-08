import { get } from "../utils/httpClient.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // API call
    get(`/movie/${movieId}`).then((data) => {
      // In data we have the movie
      setMovie(data);
    });
  }, [movieId]);

  console.log(movie);

  // Pending to show a movie not found view for invalid movieId
  if (!movie) {
    return null;
  }

  const imgURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img src={imgURL} alt={movie.title} />
        </div>
        <div className="col-12">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>
            <strong>Géneros:</strong>
          </p>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </div>
      </div>
    </div>
  );
};
