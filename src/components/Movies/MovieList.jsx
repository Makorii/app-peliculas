import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import useData from "../../hooks/useData";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MovieList({ category }) {
    const { data, getMovie } = useData()
    const navigate = useNavigate()

    useEffect(() => {
        getMovie(category, "1");
    }, [category])

  return (
    <Grid item sm={8} className="boxes-movies">
      <ListSubheader
        component="div"
        id="nested-list-subheader"
        sx={{ backgroundColor: "#000000", color: "white" }}
      >
        {category === "popular" ? "Popular" : "Top Rated"}
      </ListSubheader>
      {data.map((movie) => (
        <Box key={movie.id}>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <ListItem onClick={() => navigate(`/detail/${movie.id}`)}
              sx={{cursor:'pointer'}}>
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
  );
}

export default MovieList;
