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
import useData from "../../hooks/useData";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MovieList({ category }) {
  const { data, getMovie } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    getMovie(category, "1");
  }, [category]);

  return (
    <Container maxWidth="xl" sx={{display:"flex", flexDirection:"column", width:{
      xs : "100%",
      md : "600px",
      lg : "700px"
    }, marginTop: {
      xs : "30px", 
      md : "30px",
    }}} className="boxes-movies">
      <ListSubheader
        component="div"
        id="nested-list-subheader"
        sx={{ backgroundColor: "#1e1e1e", color: "white", width:{
          xs : "100%",
          md : "600px",
          lg : "700px"
        }}}
      >
        {category === "popular" ? "Popular" : "Top Rated"}
      </ListSubheader>
      {data.map((movie) => (
        <Box key={movie.id}>
          <List
            sx={{
              width:{
                xs : "100%",
                md : "600px",
                lg : "700px"
              },
              color: "white",
              bgcolor: "background.paper",
            }}
          >
            <ListItem
              onClick={() => navigate(`/detail/${movie.id}`)}
              sx={{ cursor: "pointer" }}
            >
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
    </Container>
  );
}

export default MovieList;
