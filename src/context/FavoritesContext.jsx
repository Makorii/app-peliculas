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
        favorites.some((movie) => movie.id === idMovie)
    }

    const data = {
        favorites,
        addFavorite,
        deleteFavorite,
        isFavorite,
    };

    return (
        <FavoritesContextProvider value={data}>
            {children}
        </FavoritesContextProvider>
    ) 
}

export default FavoritesContextProvider