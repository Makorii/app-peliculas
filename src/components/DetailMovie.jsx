import { useEffect } from 'react'
import useData from '../hooks/useData'
import { Box, Button, CardMedia, Typography } from '@mui/material'

function DetailMovie() {
    const { data, getMovie} = useData()

    useEffect(() => {
        getMovie(`${id}`)
    })

  return (
    <Box
      sx={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.poster_path})`,
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={`url(https://image.tmdb.org/t/p/original${data.backdrop_path})`}
        alt={`${data.title}`}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4">{data.title}</Typography>
        <Button>See trailer</Button>
      </Box>
      <Typography variant="subtitle1">Resume</Typography>
      <Typography variant="body">{data.overview}</Typography>
      <Typography variant="subtitle1">Genres</Typography>
      {data.genres.map((genre) => (
        <Typography variant="body">{genre}</Typography>
      ))}
    </Box>
  );
}

export default DetailMovie