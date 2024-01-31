import  Home  from "./components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewMovies from "./components/NewMovies"
import Popular from "./components/Popular"
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchMovies from "./components/SearchMovies";
import FavoritesContextProvider from "./context/FavoritesContext";
import DetailMovie from "./components/DetailMovie";


function App() {


  return (
    <>
      <BrowserRouter>
        <FavoritesContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-movies" element={<NewMovies />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/search" element={<SearchMovies />} />
            <Route path="/detail/:id" element={<DetailMovie />} />
          </Routes>
          <Footer />
        </FavoritesContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App
