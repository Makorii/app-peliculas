import { useState } from 'react'

function useData() {
  const [data, setData] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY_TMDB;

  const moviesSlider = () => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&&language=es-ES&page=1&sort_by=popularity.desc";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setData(json.results.slice(0, 5)))
      .catch((err) => console.error("error:" + err));
  };

  const popularMovies = () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.error("error:" + err));
  };

  return {
    data,
    moviesSlider,
    popularMovies
  };
}

export default useData