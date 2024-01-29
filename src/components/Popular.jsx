import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Container } from "@mui/material";
import useData from "../hooks/useData";

function Popular() {

  const {data, popularMovies} = useData();

  useEffect(() => {
    popularMovies()
  }, [])

  return (
    <Box>
        <Typography variant="h4" align="center" p={2}>
          Popular Movies
        </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }} p={3}>
        {data.map((movie) => (
          <Card sx={{ width: 250, margin: "15px" }} key={movie.id}>
            <CardMedia
              component="img"
              height="375px"
              image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={`${movie.title}`}
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
          <Pagination count={42492} showFirstButton showLastButton variant="outlined" shape="rounded"/>
        </Stack>
      </Box>
    </Box>
  );
}

export default Popular;
