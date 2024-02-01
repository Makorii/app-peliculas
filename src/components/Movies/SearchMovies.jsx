import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext, useEffect, useState } from "react";
import useData from "../../hooks/useData";
import { useNavigate } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesContext";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "18ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

function SearchMovies() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, searchMovie} = useData()
  const navigate = useNavigate()
  const { isFavorite, addFavorite, deleteFavorite } = useContext(FavoritesContext)

  useEffect(() => {
      searchMovie(searchTerm);
    }, [searchTerm]);



  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              backgroundColor: "black",
              justifyContent: "center",
              flexDirection: "column",
              paddingBottom: "15px",
            }}
          >
            <Typography pb={2}>¿What do you want to see today?</Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                placeholder="Search a movie..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      {data.length === 0 ? (
        <Box height="70.8vh"></Box>
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap" }} p={3}>
          {" "}
          {data.map((movie) => (
            <Card sx={{ width: 250, margin: "15px" }} key={movie.id}>
              <Box display="flex" justifyContent="flex-end">
                {isFavorite(movie.id) ? (
                  <FcLike
                    fontSize="25px"
                    style={{
                      position: "absolute",
                      padding: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteFavorite(movie.id)}
                  />
                ) : (
                  <FcLikePlaceholder
                    fontSize="25px"
                    style={{
                      position: "absolute",
                      padding: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => addFavorite(movie)}
                  />
                )}
              </Box>
              <CardMedia
                component="img"
                height="375px"
                image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={`${movie.title}`}
                onClick={() => navigate(`/detail/${movie.id}`)}
                sx={{ cursor: "pointer" }}
              />
              <CardContent>
                <Typography variant="subtitle2" align="center">
                  {movie.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
}

export default SearchMovies;
