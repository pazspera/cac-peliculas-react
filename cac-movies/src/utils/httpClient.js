// Llamado a la API
const API = "https://api.themoviedb.org/3";

export const get = async (path) => {
  const auth = `Bearer ${process.env.REACT_APP_API_KEY}`;
  return await fetch(API + path, {
    // configurar credenciales
    headers: {
      Authorization: auth,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((results) => results.json());
};
