import  Home  from "./components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewMovies from "./components/Movies/NewMovies"
import Popular from "./components/Movies/Popular"
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchMovies from "./components/Movies/SearchMovies";
import FavoritesContextProvider from "./context/FavoritesContext";
import DetailMovie from "./components/Movies/DetailMovie";
import FavoritesMovies from "./components/Movies/FavoritesMovies";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <BrowserRouter>
        <FavoritesContextProvider>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-movies" element={<NewMovies />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/search" element={<SearchMovies />} />
                <Route path="/detail/:id" element={<DetailMovie />} />
                <Route path="/favorites" element={<FavoritesMovies />} />
              </Routes>
              <Footer />
            </>
          )}
        </FavoritesContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App
