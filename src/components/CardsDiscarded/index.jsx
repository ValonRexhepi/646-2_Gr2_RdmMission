import React from "react"

import SearchInput from "./SearchInput"
import CardList from "./CardList"

export default function CardsDiscarded({ discardedNumberToBeFound, setDiscardedNumberToBeFound, discardedList, setDiscardedList }) {
    return (
        <div>
            <SearchInput 
                setDiscardedNumberToBeFound={setDiscardedNumberToBeFound} 
            />
            <CardList
                discardedNumberToBeFound={discardedNumberToBeFound}
                discardedList={discardedList}
                setDiscardedList={setDiscardedList}
            />
        </div>
    )
}
