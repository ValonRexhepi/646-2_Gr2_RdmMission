import React from "react"

import SearchInput from "./SearchInput"
import CardList from "./CardList"

export default function CardsDiscarded({ discardedNumberToBeFound, setDiscardedNumberToBeFound }) {
    return (
        <div>
            <SearchInput 
                setDiscardedNumberToBeFound={setDiscardedNumberToBeFound} 
            />
            <CardList
                discardedNumberToBeFound={discardedNumberToBeFound}
            />
        </div>
    )
}
