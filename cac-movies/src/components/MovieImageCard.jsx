import { Link } from "react-router-dom";

export const MovieImageCard = ({ movie }) => {
  /* const imgURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`; */
  const backdropURL = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  return (
    <div className="col">
      <Link to={`/movie/${movie.id}`}>
        <div className="card h-100">
          <img src={backdropURL} alt={movie.title} />
          <div className="card-body">
            <div className="card-text">{movie.title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
