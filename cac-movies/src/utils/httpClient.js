// Llamado a la API
const API = "https://api.themoviedb.org/3";

export const get = async (path) => {
  // console.log(process.env.REACT_APP_API_KEY); // devuelve undefined
  // Usando la variable de entorno de esta manera
  // 
  const auth = "Bearer " + process.env.REACT_APP_API_KEY;
  // const auth = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjU2ZTIzZjZiNGMwMGFmZmYxYWRiNDVmYWUxMTJiOCIsInN1YiI6IjY0MzA4NjM2MzEwMzI1MDBlMGRjNzMxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.twHSAOX1SBWpsNYx1XhqMxCmk-q_xDaYldYh9xqb458";
  return await fetch(API + path, {
    // configurar credenciales
    headers: {
      Authorization: auth,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((results) => results.json());
};
