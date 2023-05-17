import { get } from "../utils/httpClient.js";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./MovieDetail.css";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  /* const [keywords, setKeywords] = useState([]); */
  const [recomendations, setRecomendations] = useState([]);
  const [credits, setCredits] = useState([]);
  const [direction, setDirection] = useState([]);

  const usCurrencyFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 });

  useEffect(() => {
    // API call
    get(`/movie/${movieId}`).then((data) => {
      // In data we have the movie
      setMovie(data);
    });
  }, [movieId]);

  useEffect(() => {
    get(`/movie/${movieId}/credits`).then((data) => {
      setCredits(data);
    });
  }, [movieId]);

 /*  useEffect(() => {
    let direction = credits.crew.filter((crew) => crew.job === "Director");
    setDirection(direction);
  }, [movieId]); */

  console.log(direction);
  /* console.log("credits", credits);
  console.log("crew", credits.crew);
  console.log("cast", credits.cast); */

  // job "Director"
  // job: "Writer"

  useEffect(() => {
    get(`/movie/${movieId}/similar`).then((data) => {
      // Saves only recommendations with image
      const recommendationsWithPicture = data.results.filter((movie) => movie.backdrop_path !== null);
      setRecomendations(recommendationsWithPicture.slice(0, 4));
    });
  }, [movieId]);

  // Pending to show a movie not found view for invalid movieId
  if (!movie) {
    return null;
  }

  console.log(recomendations);

  const imgURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  /* const backdropURL = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`; */

  return (
    <>
      <main className="container my-5 pt-3">
        <div className="row">
          {/* For backdropURL */}
          {/* <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-0 mb-4"> */}
          <div className="col-12 col-md-6 col-lg-3  mb-4">
            <img className="image" src={imgURL} alt={movie.title} />
          </div>
          <div className="col-12 col-md-6 col-lg-9">
            <h1>
              {movie.title} ({movie.release_date.substring(0, 4)})
            </h1>
            <p className="tagline">{movie.tagline}</p>
            {movie.genres.map((genre) => (
              <span className="badge bg-secondary me-2 mb-3" key={genre.id}>
                {genre.name}
              </span>
            ))}
            <p>
              <strong>Runtime: </strong>
              {movie.runtime}min
            </p>
            <p>
              <strong>Synopsis: </strong>
              {movie.overview}
            </p>
            <div>
              {/* Conditional rendering on budget and revenue */}
              {movie.budget > 0 && movie.revenue > 0 ? (
                <>
                  <p>
                    <strong>Budget: </strong>
                    {usCurrencyFormatter.format(movie.budget)}
                  </p>
                  <p>
                    <strong>Revenue: </strong> {usCurrencyFormatter.format(movie.revenue)}
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>

            {/* Conditional rendering for movie btn */}
            {movie.homepage !== "" ? (
              <a href={movie.homepage} target="_blank" rel="noreferrer" className="btn btn-movie">
                Movie's website
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="row">
          {/* Conditional rendering for recomendations */}
          {recomendations.length > 0 ? (
            <div className="col-12 mt-4">
              <h3>Recomendations</h3>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                {recomendations.map((recomendation) => (
                  <div className="col" key={recomendation.id}>
                    <Link to={`/movie/${recomendation.id}`} style={{ textDecoration: "none", color: "var(--white)" }}>
                      <div className="card h-100 movie-card">
                        <img src={`https://image.tmdb.org/t/p/w500/${recomendation.backdrop_path}`} className="card-img-top" alt={recomendation.title} />
                        <div className="card-body">
                          <p className="card-text">{recomendation.title}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </main>
    </>
  );
};
