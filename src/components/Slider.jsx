import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider() {

    const [movies, setMovies] = useState([])

    const apiKey = import.meta.env.VITE_API_KEY_TMDB;

    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&&language=es-ES&page=1&sort_by=popularity.desc";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          `Bearer ${apiKey}`,
      },
    };

    useEffect(() => {
        fetch(url, options)
          .then((res) => res.json())
          .then((json) => setMovies(json.results.slice(0, 5)))
          .catch((err) => console.error("error:" + err));
      }, []);


  return (
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        className="slider"
        infinite={true}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Card sx={{ maxWidth: 700 }} style={{opacity:"75%"}}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {movie.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movie.overview}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </AutoplaySlider>
  );
}

export default Slider



