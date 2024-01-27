import Header from "./Header";
import Slider from "./Slider";
import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
} from "@mui/material";

function Home() {
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY_TMDB;

  const url =
    "https://api.themoviedb.org/3/movie/popular?language=es-ESS&page=1";

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
      .then((json) => setMovies(json.results.slice(0, 20)))
      .catch((err) => console.error("error:" + err));
  }, []);

  const urlTop =
    "https://api.themoviedb.org/3/movie/top_rated?language=es-ESS&page=1";
  const optionsTop = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  useEffect(() => {
    fetch(urlTop, optionsTop)
      .then((res) => res.json())
      .then((json) => setTopMovies(json.results.slice(0, 20)))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <>
      <Header />
      <Slider />
      <Container>
        <Grid
          container
          spacing={2}
          columns={16}
          pt={6}
          mt={6}
          columnSpacing={10}
        >
          <Grid item sm={8} className="boxes-movies">
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ backgroundColor: "#000000", color: "white" }}
            >
              Popular Movies
            </ListSubheader>
            {movies.map((movie) => (
              <Box key={movie.id}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="Travis Howard"
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      />
                    </ListItemAvatar>
                    <ListItemText primary={movie.title} />
                  </ListItem>
                </List>
              </Box>
            ))}
          </Grid>
          <Grid item sm={8} className="boxes-movies">
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ backgroundColor: "#000000", color: "white" }}
            >
              Top Rated
            </ListSubheader>
            {topMovies.map((movie) => (
              <Box key={movie.id}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="Travis Howard"
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      />
                    </ListItemAvatar>
                    <ListItemText primary={movie.title} />
                  </ListItem>
                </List>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
