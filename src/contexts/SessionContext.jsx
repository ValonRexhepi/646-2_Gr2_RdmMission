import React, { useState, createContext, useContext } from "react"

const SessionContext = createContext()

export const useSession = () => useContext(SessionContext)

export default function SessionProvider({ children }) {
    const [ session, setSession ] = useState(null)

    return (
        <SessionContext.Provider value={{ session, setSession }}>
            {children}
        </SessionContext.Provider>
    )
}