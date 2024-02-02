import Slider from "./Slider";
import { Container, Grid } from "@mui/material";
import MovieList from "./Movies/MovieList";

function Home() {
  return (
    <>
      <Slider />
      <Container maxWidth="xl" sx={{display:"flex", margin:"80px auto", flexWrap:"wrap"}}>
          <MovieList category="popular" />
          <MovieList category="top_rated" />
      </Container>
    </>
  );
}

export default Home;
