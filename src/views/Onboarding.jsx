import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid'
import { db } from "../services/firebase"
import { ref, set } from "firebase/database"

import { useSession } from '../contexts/SessionContext';
import AppLogo from '../components/AppLogo';

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
            <AppLogo />
            <h1>MISSION GDR: DERNIERE QUETE AVONT LES FETES</h1>
            <h3>*names to be filled in*</h3>
            <br/>
            <Link to = "/rules" className="button">Comment jouer? (Rules)</Link>
            <br/>
            <button className="button" onClick={createGameSession}>
                Commencer une partie (Start Game)
            </button>
        </div>
    )
}