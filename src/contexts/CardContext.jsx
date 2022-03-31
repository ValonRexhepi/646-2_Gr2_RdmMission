import React, { useState, createContext, useContext } from "react"

const CardContext = createContext()

export const useCard = () => useContext(CardContext)

export default function CardProvider({ children }) {
    const [ card, setCard ] = useState(null)

    return (
        <CardContext.Provider value={{ card, setCard }}>
            {children}
        </CardContext.Provider>
    )
}