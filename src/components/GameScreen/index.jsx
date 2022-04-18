import React, { useState, useEffect } from "react"

import CardsInDeck from "../CardsInDeck"
import CardContainer from "../CardContainer"
import cards from "../../constants/cards"

export default function GameScreen({ setIsPenalty }) {
    const [ numberToBeFound, setNumberToBeFound ] = useState("synopsis")

    useEffect(() => {
        const card = cards.find(c => String(c.number) === numberToBeFound.toLowerCase())
        if (card) {
            card.hint === "Penalty card" || card.solution === "Penalty card"
            ? setIsPenalty(true)
            : setIsPenalty(false)
        } else {
            setIsPenalty(false)
        }
    }, [numberToBeFound, setIsPenalty])

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
