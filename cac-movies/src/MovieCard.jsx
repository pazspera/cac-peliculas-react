
export const MovieCard = ({movie}) => {
    const imgURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    return (
      <li className="movieCard">
        <img src={imgURL} alt={movie.title} />
        <p>{movie.title}</p>
      </li>
    );
}