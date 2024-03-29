import { useEffect, useState } from "react";
import useData from "../../hooks/useData";
import { Box, Button, CardMedia, Dialog, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { FavoritesContext } from "../../context/FavoritesContext";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DetailMovie() {
  const { data, detailMovie, trailerMovie } = useData();
  const { id } = useParams();
  const { isFavorite, addFavorite, deleteFavorite } =
    React.useContext(FavoritesContext);
  const [videoUrl, setVideoUrl] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    trailerMovie(id, setVideoUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setVideoUrl("");
  };

  useEffect(() => {
    detailMovie(id);
  }, [id]);

  return (
    <Box
      className="filter"
      sx={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
        height: "100vh",
        backgroundSize: "cover",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundPosition: {
          xs: "center",
        },
      }}
    >
      <Box
        sx={{
          width: "400px",
          padding: "25px",
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <CardMedia
          component="img"
          width="100%"
          image={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt={`${data.title}`}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth="500px"
        p={1}
        sx={{
          padding: {
            xs: "30px",
          },
        }}
      >
        <Typography variant="h3">{data.title}</Typography>
        <Typography variant="overline" pt={1}>
          Resume:
        </Typography>
        <Typography variant="body1">{data.overview}</Typography>
        <Typography variant="overline" pt={1}>
          Genres:
        </Typography>
        {data.genres && data.genres.length > 0 ? (
          data.genres.map((genre) => (
            <Typography key={genre.id} variant="body1">
              {genre.name}
            </Typography>
          ))
        ) : (
          <Typography variant="body1">No genres available</Typography>
        )}
        <Box display="flex" justifyContent="space-between">
          <Button
            variant="contained"
            onClick={handleClickOpen}
            sx={{ width: "200px", marginTop: "20px" }}
            color="error"
          >
            See trailer
          </Button>
          {isFavorite(data.id) ? (
            <Box display="flex" alignItems="center" sx={{ marginTop: "20px"}}>
              <FcLike
                fontSize="25px"
                style={{
                  padding: "5px",
                  cursor: "pointer",
                }}
                onClick={() => deleteFavorite(data.id)}
              />
              <Typography variant="body1">Remove favorite</Typography>
            </Box>
          ) : (
            <Box display="flex" alignItems="center" sx={{ marginTop: "20px"}}>
              <FcLikePlaceholder
                fontSize="25px"
                style={{
                  padding: "5px",
                  cursor: "pointer",
                }}
                onClick={() => addFavorite(data)}
              />
              <Typography variant="body1">Add to favorites</Typography>
            </Box>
          )}
        </Box>
      </Box>
      <React.Fragment>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative", backgroundColor: "black" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {data.title}
              </Typography>
            </Toolbar>
          </AppBar>
          {videoUrl && (
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title="YouTube video player"
              allowFullScreen
            />
          )}
        </Dialog>
      </React.Fragment>
    </Box>
  );
}

export default DetailMovie;
