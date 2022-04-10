import React, { useState, createContext, useContext } from "react"

const PopupContext = createContext()

export const usePopup = () => useContext(PopupContext)

export default function PopupProvider({ children }) {
    const [ content, setContent ] = useState({ 
        isOpen: false, 
        msg: "",  
        isHint: false,
        isSolution: false
    })

    return (
        <PopupContext.Provider value={{ content, setContent }}>
            {children}
        </PopupContext.Provider>
    )
}