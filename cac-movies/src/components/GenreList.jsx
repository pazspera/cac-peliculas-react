import { get } from "../utils/httpClient.js";
import { useState, useEffect } from "react";

export const GenreList = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    get("/genre/27-horror/movie/list").then((data) => {
      setGenres(data.results);
    });
  });

  console.log(genres);
};
