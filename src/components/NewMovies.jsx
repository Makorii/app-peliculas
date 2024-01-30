import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { FcLikePlaceholder } from "react-icons/fc";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Container } from "@mui/material";
import useData from "../hooks/useData";

function NewMovies() {
  const { data, getMovie } = useData()

  useEffect(() => {
    getMovie("now_playing")
  }, [])


  return (
    <Box>
      <Typography variant="h4" align="center" p={2}>
        New movies
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }} p={3}>
        {data.map((movie) => (
          <Card sx={{ width: 250, margin: "15px" }} key={movie.id}>
            <Box display="flex" justifyContent="flex-end">
              <FcLikePlaceholder
                fontSize="25px"
                style={{ position: "absolute", padding:"5px" }}
              />
            </Box>
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
          </Card>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }} p={2}>
        <Stack spacing={2}>
          <Pagination
            count={158}
            showFirstButton
            showLastButton
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default NewMovies;
