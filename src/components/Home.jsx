import Slider from "./Slider";
import { Container, Grid } from "@mui/material";
import MovieList from "./Movies/MovieList";

function Home() {
  return (
    <>
      <Slider />
      <Container>
        <Grid
          xl
          container
          spacing={2}
          columns={16}
          pt={6}
          mt={6}
          columnSpacing={10}
        >
          <MovieList category="popular" />
          <MovieList category="top_rated" />
        </Grid>
      </Container>
    </>
  );
}

export default Home;
