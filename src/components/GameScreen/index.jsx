import React, { useState } from "react"

import CardsInDeck from "../CardsInDeck"
import CardContainer from "../CardContainer"

export default function GameScreen() {
    const [ numberToBeFound, setNumberToBeFound ] = useState("synopsis")

    return (
        <div id="game-screen">
            <CardsInDeck
                numberToBeFound={numberToBeFound}
                setNumberToBeFound={setNumberToBeFound}
            />
            <div className="cards">
                <CardContainer numberToBeFound={numberToBeFound} />
            </div>
        </div>
    )
}
