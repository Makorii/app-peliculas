import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])
    const [ getMovie, saveMovie ] = useLocalStorage("favorites")

    useEffect(() => {
        setFavorites(getMovie())
    }, [])

    const addFavorite = (movie) => {
        saveMovie([...favorites, movie])
        setFavorites([...favorites, movie])
    }

    const deleteFavorite = (idMovie) => {
        saveMovie(favorites.filter((movie) => movie.id !== idMovie))
        setFavorites(favorites.filter((movie) => movie.id !== idMovie))
    }

    const isFavorite = (idMovie) => {
        return favorites.some((movie) => movie.id === idMovie)
    }

    const data = {
        favorites,
        addFavorite,
        deleteFavorite,
        isFavorite,
    };

    return <FavoritesContext.Provider value={data}> {children} </FavoritesContext.Provider>
 
}

export default FavoritesContextProvider