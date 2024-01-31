import { useState } from 'react'

function useData() {
  const [data, setData] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY_TMDB;

  const getMovie = (category, page) => {
    const url = `https://api.themoviedb.org/3/movie/${category}?language=es-ES&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };

    return fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        return data; 
      })
      .catch((err) => console.error("error:" + err));
  }

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

  const searchMovie = (title) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=es-ES`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        setData(data.results); })
      .catch(err => console.error('error:' + err))
    
    }

  const detailMovie = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=es-ES`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("error:" + err));
  };

  return {
    data,
    getMovie,
    moviesSlider,
    searchMovie,
    detailMovie,
  };
}

export default useData