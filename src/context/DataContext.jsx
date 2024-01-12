import { useContext, createContext, useEffect, useState } from "react"

const APIContext = createContext()

export function ApiContextProvider({ children }) {

    const [movie, setMovie] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/data')
            .then(response => response.json())
            .then(data => setMovie(data))
    }, [])
    return (
        <APIContext.Provider value={{movie}}>
            {children}
        </APIContext.Provider>
    )
}
export default ApiContextProvider;

export function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}