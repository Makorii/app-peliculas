import { createContext, useState } from 'react'

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])

    const addFavorite = (movie) => {
        setFavorites([...favorites, movie])
    }

    const deleteFavorite = (idMovie) => {
        setFavorites([favorites.filter((movie) => movie.id !== idMovie)])
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