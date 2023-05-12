import { get } from "../utils/httpClient.js";
import { useState, useEffect } from "react";

export const GenreList = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    get("/27-horror/movie/list").then((data) => {
      setGenres(data.results);
    });
  });

  console.log("I'm in genre");
  console.log(genres);
};
