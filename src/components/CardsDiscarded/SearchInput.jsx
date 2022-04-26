import React, { useState } from "react"
import { FiSearch } from "react-icons/fi"

export default function SearchInput({ setDiscardedNumberToBeFound, discardedList, retrieveCard }) {
    const [ currentNum, setCurrenNum ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setDiscardedNumberToBeFound(currentNum)
        if(discardedList.findIndex(x => x.number === currentNum) !== -1) {
            retrieveCard(currentNum)
        }
    }

    return (
        <div className="search-input-container">
            <FiSearch />
            <form onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    placeholder="Numéro de la carte..."
                    onChange={(e) => setCurrenNum((e.target.value).replace(/\s/g, "").toUpperCase())}
                />
            </form>
        </div>
    )
}
