import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import useData from "../hooks/useData";
import { useNavigate } from "react-router-dom";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider() {
  const { data, moviesSlider } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    moviesSlider();
  }, []);

  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={6000}
      className="slider"
      infinite={true}
    >
      {data.map((movie) => (
        <Box
          key={movie.id}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundPositionY : "top",
            alignItems:"flex-end"
          }}
        >
          <Card sx={{ maxWidth: 700 }} style={{ opacity: "75%", marginBottom:"20px", backgroundColor:"black",  color:"white"}}>
            <CardActionArea onClick={() => navigate(`/detail/${movie.id}`)}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center">
                  {movie.title}
                </Typography>
                <Typography variant="body2" sx={{color:"#ffffffde"}}>
                  {movie.overview}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      ))}
    </AutoplaySlider>
  );
}

export default Slider;
