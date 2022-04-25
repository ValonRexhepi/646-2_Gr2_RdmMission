import React, { useState, useEffect } from "react"
import cards from "../../constants/cards"

export default function CardList({ numberToBeFound, setNumberToBeFound, notFoundTxt, setNotFoundTxt }) {
    const [ cardFound, setCardFound ] = useState(null)

    useEffect(() => {
        if (cards) {
            const found = cards.find(x => String(x.number) === numberToBeFound.replace(/\s/g, "").toLowerCase())

            if (found) {
                if (found.isDiscarded) {
                    setNotFoundTxt("")
                    setCardFound(null)
                    setNumberToBeFound("")
                } else {
                    setCardFound(found)
                    setNotFoundTxt("")
                }   
            } else {
                setCardFound(null)
                numberToBeFound
                ? setNotFoundTxt("Ce numéro est incorrect ou ne correspond pas à cette étape, entrez un autre numéro !")
                : setNotFoundTxt("")
            }
        }
    }, [numberToBeFound, setNotFoundTxt, setNumberToBeFound])

    return (
        <div>
            <h4>Cartes dans la pioche</h4>
            <p>{cardFound && cardFound.number}</p>
            <p>{notFoundTxt}</p>
        </div>
    )
}
