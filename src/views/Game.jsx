import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { remove, ref } from "firebase/database";
import { db } from "../services/firebase";
import { getDataLS } from "../utils/helpers";

import { useSession } from "../contexts/SessionContext"
import GameScreen from "../components/GameScreen"
import Clock from "../components/Clock";

export default function Game() {
    const { pathname } = useLocation()
    const { session, setSession } = useSession()

    useEffect(() => {
        const sessionId = getDataLS("sessionId")
        if (sessionId && sessionId === pathname.split("/")[1]) {
            setSession({ id: sessionId })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    const endGame = () => {
        remove(ref(db, `/${session.id}`))
        localStorage.clear()
        setSession(null)
    }

    return (
        <div className="container game">
            <Clock />

            <p>Session Id: {session?.id}</p>
            <Link className = "button" 
                to={{
                pathname:"/roadmap",
                state: session?.id
            }}>Feuille de route (Roadmap)</Link>
            <Link to="/">
                <button className="button" onClick={endGame}>Fin du jeu (End Game)</button>
            </Link>

            <GameScreen />
        </div>
    )
}
