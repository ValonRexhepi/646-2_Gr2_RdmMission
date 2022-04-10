import React, { useState } from "react"
import { FiSearch } from "react-icons/fi"

export default function SearchInput({ setDiscardedNumberToBeFound }) {
    const [ currentNum, setCurrenNum ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setDiscardedNumberToBeFound(currentNum)
    }

    return (
        <div className="search-input-container">
            <FiSearch />
            <form onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    placeholder="Numéro de la carte... (Card number...)"
                    onChange={(e) => setCurrenNum((e.target.value).replace(/\s/g, "").toUpperCase())}
                />
            </form>
        </div>
    )
}
