import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid'
import { db } from "../services/firebase"
import { ref, set } from "firebase/database"
import { storeDataLS, getDataLS } from '../utils/helpers';

import { useSession } from '../contexts/SessionContext';
import AppLogo from '../components/AppLogo';

export default function Onboarding() {
    const navigate = useNavigate()
    const { setSession } = useSession()
    const sessionId = uuid()

    useEffect(() => {
        const sessionId = getDataLS("sessionId")
        if (sessionId) {
            setSession({ id: sessionId })
            navigate(`/${sessionId}`)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const createGameSession = () => {
        const session = { id: sessionId }
        set(ref(db, `/${sessionId}`), session)
        setSession(session)
        storeDataLS("sessionId", sessionId)
        navigate(`/${sessionId}`)
    }

    return(
        <div id="onboarding">
            <div>
                <AppLogo />
                <h1>MISSION GDR: DERNIÈRE QUÊTE AVANT LES FÊTES</h1>
                <h3>Prototype du jeu : Jouhar Myriam, Melly Pauline, Trombert Alexia (Haute école de gestion Genève)</h3>
                <h3>Site web et développement : Ferrari Bastien, Le Phung, Rexhepi Valon, Sharma Sanya (HES-SO Valais-Wallis, HAAGA HELIA University of applied Sciences)</h3>
                <br/>
            </div>
            
            <div>
                <Link to = "/rules" className="button">Comment jouer ? (Rules)</Link>
                <br/>
                <button className="button" onClick={createGameSession}>
                    Commencer une partie (Start Game)
                </button>
            </div>
        </div>
    )
}