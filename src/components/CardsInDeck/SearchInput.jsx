import React, { useState } from "react"
import { FiSearch } from "react-icons/fi"

export default function SearchInput({ setNumberToBeFound, setNotFoundTxt }) {
    const [ currentNum, setCurrentNum ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setNumberToBeFound(currentNum)
    }

    const handleChange = (e) => {
        setNotFoundTxt("")
        setCurrentNum((e.target.value).replace(/\s/g, "").toUpperCase())
    }

    return (
        <div className="search-input-container">
            <FiSearch />
            <form onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    placeholder="Numéro de la carte..."
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}
