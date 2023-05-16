import { Link } from "react-router-dom";
import "./MovieCard.css";

export const MovieCard = ({ movie }) => {
  const imgURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  /* const backdropURL = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`; */
  return (
    <div className="col">
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "var(--white)" }} className="movie-card">
        <div className="card h-100 movie-card">
          <img src={imgURL} alt={movie.title} className="card-img-top" />
          <div className="card-body">
            <p className="card-text">{movie.title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
