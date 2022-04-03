import React from "react"

import SearchInput from "./SearchInput"
import CardList from "./CardList"

export default function CardsInDeck({ numberToBeFound, setNumberToBeFound }) {
    return (
        <div>
            <SearchInput 
                setNumberToBeFound={setNumberToBeFound} 
            />
            <CardList
                numberToBeFound={numberToBeFound}
            />
        </div>
    )
}
