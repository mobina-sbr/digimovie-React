import { createContext, useState } from 'react'
import { useAPI } from './DataContext'

export const MovieContext = createContext({
    items: [],
    getMovieQuantity: () => { },
    addMovieToCart: () => { },
    deleteFromCart: () => { },
    removeMovieFromCart: () => { }

})

export function MovieProvider({ children }) {

    const { movie } = useAPI()
    const [cartMovie, setCartMovie] = useState([])

    function getMovieQuantity(id) {
        const quantity = cartMovie.find((data) => data.id === id)?.quantity

        if (quantity === undefined) {
            return 0
        }
        return quantity
    }

    function addMovieToCart(id){
        const quantity = getMovieQuantity(id)

        if (quantity === 0) {
            setCartMovie(
                [...cartMovie, { id: id, quantity: 1 }]
            )
        } else {
            setCartMovie(
                cartMovie.map((data) => data.id === id ? { ...data, quantity: data.quantity + 1 } : data)

            )
        }
    }

    function deleteFromCart(id){
        setCartMovie((cartMovie) => cartMovie.filter((data) => { return data.id != id }))

    }

    function removeMovieFromCart(id){
        const quantity = getMovieQuantity(id)
        if (quantity === 1) {
            deleteFromCart(id)
        } else {
            setCartMovie(cartMovie.map((data) => data.id === id ? { ...data, quantity: data.quantity - 1 } : data))
        }
    }
    const ContextValue = {
        items: cartMovie,
        getMovieQuantity,
        addMovieToCart,
        removeMovieFromCart,
        deleteFromCart,
    }

    return (
        <MovieContext.Provider value={ContextValue}>{children}</MovieContext.Provider>
    )
}