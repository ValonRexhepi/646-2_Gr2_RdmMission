import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/app.css";

export default function Onboarding() {

    return(
        <div>
            <h1>MISSION GDR: DERNIERE QUETE AVONT LES FETES</h1>
            <h2>*names to be filled in*</h2>
                <Link to = "/rules">Comment jouer? (Rules)</Link>
            <br/>
            <button onClick={() => console.log("starts game")}>Commencer une partie</button>
        </div>
    )
}