import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Container } from "@mui/material";

function NewMovies() {
  const [newMovies, setNewMovies] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY_TMDB;

  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setNewMovies(data.results))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <Box>
        <Typography variant="h4" align="center" p={2}>
          New movies
        </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }} p={3}>
        {newMovies.map((movie) => (
          <Card sx={{ width: 250, margin: "15px" }} key={movie.id}>
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="subtitle2" align="center">
                {movie.title}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent:"center" }} p={2}>
        <Stack spacing={2}>
          <Pagination count={158} showFirstButton showLastButton variant="outlined" shape="rounded"/>
        </Stack>
      </Box>
    </Box>
  );
}

export default NewMovies;
