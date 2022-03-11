import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid'
import { db } from "../services/firebase"
import { ref, set } from "firebase/database"

import { useSession } from '../contexts/SessionContext';

export default function Onboarding() {
    const navigate = useNavigate()
    const { setSession } = useSession()
    const sessionId = uuid()

    const createGameSession = () => {
        const session = { id: sessionId }
        set(ref(db, `/${sessionId}`), session)
        setSession(session)
        navigate(`/game/${sessionId}`)
    }

    return(
        <div>
            <h1>MISSION GDR: DERNIERE QUETE AVONT LES FETES</h1>
            <h2>*names to be filled in*</h2>
            <Link to = "/rules">Comment jouer? (Rules)</Link>
            <br/>
            <button onClick={createGameSession}>
                Commencer une partie (Start Game)
            </button>
        </div>
    )
}