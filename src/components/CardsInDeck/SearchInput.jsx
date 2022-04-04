import React from "react"
import { FiSearch } from "react-icons/fi"

export default function SearchInput({ setNumberToBeFound }) {
    return (
        <div className="search-input-container">
            <FiSearch />
            <input
                className="search-input"
                placeholder="Numéro de la carte... (Card number...)"
                onChange={(e) => setNumberToBeFound((e.target.value).replace(/\s/g, "").toUpperCase())}
            />
        </div>
    )
}
