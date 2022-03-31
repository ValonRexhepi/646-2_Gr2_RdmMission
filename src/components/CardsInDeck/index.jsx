import React, { useState } from "react"

import SearchInput from "./SearchInput"
import CardList from "./CardList"

export default function CardsInDeck() {
    const [ numberToBeFound, setNumberToBeFound ] = useState("")

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
