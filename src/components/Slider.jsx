import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import useData from '../hooks/useData';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider() {
  const {data, moviesSlider} = useData()

  useEffect(() => {
    moviesSlider();
  }, [])

  return (
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        className="slider"
        infinite={true}
      >
        {data.map((movie) => (
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



