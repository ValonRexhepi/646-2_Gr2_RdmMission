import React, { useState, useEffect } from "react"
import cards from "../../constants/cards"

export default function CardList({ discardedNumberToBeFound }) {
    const [ cardFound, setCardFound ] = useState(null)
    const [ notFoundTxt, setNotFoundTxt ] = useState(null)
    const [ discardedList, setDiscardedList ] = useState([])
    useEffect(() => {

        cards.forEach(card => {
            if(card.isDiscarded) {
                discardedList.push(card.number)
            }})        

        if (cards) {
            const found = cards.find(x => String(x.number) === discardedNumberToBeFound.replace(/\s/g, "").toLowerCase())

            if (found) {
                if (found.isDiscarded) {
                    setNotFoundTxt("")
                    setCardFound(found)
                    console.log("discarded")
                } else {
                    setCardFound(null)
                    setNotFoundTxt("")
                    console.log("not discarded")
                }   
            } else {
                setCardFound(null)
                discardedNumberToBeFound
                ? setNotFoundTxt("Ce numéro est incorrect ou ne correspond pas à cette étape, entrez un autre numéro !")
                : setNotFoundTxt("")
            }
        }
        
    }, [discardedList, discardedNumberToBeFound])

    return (
        <div>
            <h4>Cartes défaussées (Cards Discarded)</h4>
            <div>
                {(cardFound === null) &&
                    discardedList.map(number => {
                        return(<p>{number}</p>)
                    })
                }
                    <p>{cardFound && cardFound.number}</p>
                    <p>{notFoundTxt}</p>       
            </div>
        </div>
    )
}
