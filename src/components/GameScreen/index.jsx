import React, { useState } from "react"

import CardsInDeck from "../CardsInDeck"
import CardContainer from "../CardContainer"
import CardsDiscarded from "../CardsDiscarded"

export default function GameScreen() {
    const [ numberToBeFound, setNumberToBeFound ] = useState("synopsis")
    const [ discardedNumberToBeFound, setDiscardedNumberToBeFound] = useState("")
    const [ discardedList, setDiscardedList] = useState([])

    return (
        <div id="game-screen">
            <CardsInDeck
                numberToBeFound={numberToBeFound}
                setNumberToBeFound={setNumberToBeFound}
            />

            <div className="cards">
                <CardContainer 
                    numberToBeFound={numberToBeFound} 
                    discardedNumberToBeFound={discardedNumberToBeFound}
                    discardedList={discardedList}
                    setDiscardedList={setDiscardedList}
                />
            </div>

            <CardsDiscarded 
                discardedNumberToBeFound={discardedNumberToBeFound} 
                setDiscardedNumberToBeFound={setDiscardedNumberToBeFound}
                discardedList={discardedList}
                setDiscardedList={setDiscardedList}
            />
        </div>
    )
}
