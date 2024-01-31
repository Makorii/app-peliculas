import { useEffect } from 'react'
import useData from '../hooks/useData'
import { Box, Button, Card, CardMedia, Container, Typography } from '@mui/material'
import { useParams } from 'react-router-dom';

function DetailMovie() {
    const { data, detailMovie} = useData()
    const { id } = useParams();

    useEffect(() => {
        detailMovie(id);
    },[id])

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

      <Button>See trailer</Button>
    </Box>
  );
}

export default DetailMovie