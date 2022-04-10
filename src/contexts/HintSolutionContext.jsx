import React, { useState, createContext, useContext } from "react"

const HintSolutionContext = createContext()

export const useHintSolution = () => useContext(HintSolutionContext)

export default function HintSolutionProvider({ children }) {
    const [ hintSolution, setHintSolution ] = useState({ 
        isOpen: false, 
        isHint: false, 
        text: "", 
        key: "",
        time: "" 
    })

    return (
        <HintSolutionContext.Provider value={{ hintSolution, setHintSolution }}>
            {children}
        </HintSolutionContext.Provider>
    )
}