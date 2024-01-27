import  Home  from "./components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewMovies from "./components/NewMovies"
import Popular from "./components/Popular"
import Header from "./components/Header";


function App() {


  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-movies" element={<NewMovies />} />
          <Route path="/popular" element={<Popular />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
