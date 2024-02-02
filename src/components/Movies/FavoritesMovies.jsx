import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function FavoritesMovies() {
  const { favorites, isFavorite, addFavorite, deleteFavorite } =
    useContext(FavoritesContext);

  return (
    <Box>
      <Typography variant="h4" align="center" p={2}>
        Favorites Movies
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            xs: "center",
          },
        }}
        p={3}
      >
        {favorites.length === 0 ? (
          <Box
            display="flex"
            height="67.4vh"
            justifyContent="center"
            width="100%"
            alignItems="center"
          >
            <Typography align="center">Add a new favorite movie</Typography>
          </Box>
        ) : (
          favorites.map((movie) => (
            <Box height="67.4vh" key={movie.id}>
              <Card sx={{ width: 250, margin: "15px" }}>
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
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
}

export default FavoritesMovies;
