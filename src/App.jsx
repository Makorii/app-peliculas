import  Home  from "./components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewMovies from "./components/NewMovies"
import Popular from "./components/Popular"


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/new-movies" element={<NewMovies />}/>
      <Route path="/popular" element={<Popular />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
