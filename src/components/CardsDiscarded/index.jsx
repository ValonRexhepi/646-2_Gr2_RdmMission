import React from "react"
import SearchInput from "./SearchInput"
import CardList from "./CardList"
import cards from "../../constants/cards"

export default function CardsDiscarded({ discardedNumberToBeFound, setDiscardedNumberToBeFound, discardedList, setDiscardedList, imgSrc, setImgSrc }) {
    
    const retrieveCard = (number) => {
        const cardIndex = cards?.findIndex(x => x?.number === number)
        if (cards && cardIndex !== -1) {
            cards[cardIndex].isDiscarded = false
        }
        setDiscardedList(discardedList.filter(x => String(x.number) !== String(number))) 
        const cardNum = number.toString().toUpperCase()
        const src = require(`../../assets/cards/card${cardNum}.jpg`)
        setImgSrc([...new Set([ ...imgSrc, src])])
    }

<<<<<<< HEAD
=======
export default function CardsDiscarded({ discardedNumberToBeFound, setDiscardedNumberToBeFound, discardedList, setDiscardedList }) {
>>>>>>> c3537f3 (Seems working for now)
    return (
        <div>
            <SearchInput 
                setDiscardedNumberToBeFound={setDiscardedNumberToBeFound}
                retrieveCard={retrieveCard}
                discardedList={discardedList}
            />
            <CardList
                discardedNumberToBeFound={discardedNumberToBeFound}
                discardedList={discardedList}
                setDiscardedList={setDiscardedList}
<<<<<<< HEAD
                imgSrc={imgSrc}
                setImgSrc={setImgSrc}
                retrieveCard={retrieveCard}
=======
>>>>>>> c3537f3 (Seems working for now)
            />
        </div>
    )
}
