import React, { useState } from "react"
import { useImgSrc } from "../../contexts/ImgSrcContext"
import CardsInDeck from "../CardsInDeck"
import CardContainer from "../CardContainer"
import CardsDiscarded from "../CardsDiscarded"

export default function GameScreen() {
    const [ numberToBeFound, setNumberToBeFound ] = useState("synopsis")
    const [ discardedNumberToBeFound, setDiscardedNumberToBeFound] = useState("")
    const [ discardedList, setDiscardedList] = useState([])
    const { imgSrc, setImgSrc } = useImgSrc()

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
                    imgSrc={imgSrc}
                    setImgSrc={setImgSrc}
                />
            </div>

            <CardsDiscarded 
                discardedNumberToBeFound={discardedNumberToBeFound} 
                setDiscardedNumberToBeFound={setDiscardedNumberToBeFound}
                discardedList={discardedList}
                setDiscardedList={setDiscardedList}
                imgSrc={imgSrc}
                setImgSrc={setImgSrc}
            />
        </div>
    )
}
