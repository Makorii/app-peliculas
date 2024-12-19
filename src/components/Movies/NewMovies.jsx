import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, CircularProgress } from "@mui/material";
import useData from "../../hooks/useData";
import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { useNavigate } from "react-router-dom";

function NewMovies() {
  const { data, getMovie } = useData();
  const { isFavorite, addFavorite, deleteFavorite } =
    useContext(FavoritesContext);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getMovie("now_playing", currentPage)
      .then((result) => {
        setTotalPages(result.total_pages);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [currentPage]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  return (
    <Box>
      <Typography variant="h4" align="center" p={2} color="white" mt={6}>
        New movies
      </Typography>
      <Box
        className="container-cards"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            xs: "center",
            md: "center",
            lg: "flex-start"
          },
        }}
        p={3}
      >
        {loading ? (
          <Box sx={{width:"100%", height:"67.4vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <CircularProgress sx={{color:"red"}}/>
          </Box>
        ) : (data.map((movie) => (
          <Card sx={{ width: 250, margin: {
            xs : "15px",
            md : "20px",
            lg : "29px"
          } }} key={movie.id}>
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
        )))}
      </Box>
      {loading ? null : <Box sx={{ display: "flex", justifyContent: "center" }} p={2}>
        <Stack spacing={2} >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            showFirstButton
            showLastButton
          />
        </Stack>
      </Box>}
    </Box>
  );
}

export default NewMovies;
