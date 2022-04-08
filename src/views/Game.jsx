import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { remove, ref } from "firebase/database";
import { db } from "../services/firebase";
import { getDataLS } from "../utils/helpers";

import { useSession } from "../contexts/SessionContext"
import GameScreen from "../components/GameScreen"
import Roadmap from "./Roadmap"
import Clock from "../components/Clock"

export default function Game() {
    const { pathname } = useLocation()
    const { session, setSession } = useSession()
    const [ isOpenRoadmap, setIsOpenRoadmap ] = useState(false)

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

    const showRoadmap = (e) => {
        e.preventDefault()
        setIsOpenRoadmap(true)
    }

    return (
        <div className="container game">
            <Clock />

            <p>Session Id: {session?.id}</p>
            {/* <Link className = "button" 
                to={{
                pathname:"/roadmap",
                state: session?.id
            }}>Feuille de route (Roadmap)</Link> */}
            <button 
                className = "button" 
                onClick={showRoadmap}
            >
                Feuille de route (Roadmap)
            </button>
            <Link to="/">
                <button className="button" onClick={endGame}>Fin du jeu (End Game)</button>
            </Link>

            { isOpenRoadmap && <Roadmap setIsOpenRoadmap={setIsOpenRoadmap} /> }
            <GameScreen />
        </div>
    )
}
