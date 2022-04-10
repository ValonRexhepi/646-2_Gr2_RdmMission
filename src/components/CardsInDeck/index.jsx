import React, { useState } from "react"

import SearchInput from "./SearchInput"
import CardList from "./CardList"

export default function CardsInDeck({ numberToBeFound, setNumberToBeFound }) {
    const [ notFoundTxt, setNotFoundTxt ] = useState(null)

    return (
        <div>
            <SearchInput 
                setNumberToBeFound={setNumberToBeFound} 
                setNotFoundTxt={setNotFoundTxt}
            />
            <CardList
                numberToBeFound={numberToBeFound}
                notFoundTxt={notFoundTxt}
                setNotFoundTxt={setNotFoundTxt}
            />
        </div>
    )
}
