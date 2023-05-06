export const MovieCard = ({ movie }) => {
  const imgURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={imgURL} alt={movie.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
        </div>
      </div>
    </div>
  );
};
