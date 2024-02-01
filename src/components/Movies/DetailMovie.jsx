import { useEffect, useState } from 'react'
import useData from '../../hooks/useData'
import { Box, Button, Card, CardMedia, Container, Dialog, Typography } from '@mui/material'
import { useParams } from 'react-router-dom';
import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DetailMovie() {
    const { data, detailMovie, trailerMovie} = useData()
    const { id } = useParams();
    const [videoUrl, setVideoUrl] = useState('');
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      trailerMovie(id, setVideoUrl);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setVideoUrl('');
    };
  
    useEffect(() => {
      detailMovie(id);
    }, [id]);


  return (
    <Box
      sx={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
        height: "100vh",
        backgroundSize: "cover",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "400px", padding: "25px" }}>
        <CardMedia
          component="img"
          width="100%"
          image={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt={`${data.title}`}
        />
      </Box>
      <Box display="flex" flexDirection="column" maxWidth="500px">
        <Typography variant="h3">{data.title}</Typography>
        <Typography variant="subtitle1">Resume</Typography>
        <Typography variant="body">{data.overview}</Typography>
        <Typography variant="subtitle1">Genres</Typography>
        {data.genres && data.genres.length > 0 ? (
          data.genres.map((genre) => (
            <Typography key={genre.id} variant="body">
              {genre.name}
            </Typography>
          ))
        ) : (
          <Typography variant="body">No genres available</Typography>
        )}
      </Box>
      <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        See trailer
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', backgroundColor:"black" }}>
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

export default DetailMovie