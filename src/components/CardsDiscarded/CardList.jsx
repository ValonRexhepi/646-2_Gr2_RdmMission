import React, { useState, useEffect } from "react"
import { getDataLS } from "../../utils/helpers"

export default function CardList({ discardedNumberToBeFound, discardedList, setDiscardedList }) {
    const [ cardFound,  ] = useState(null)
    const [ notFoundTxt, setNotFoundTxt ] = useState(null)

    useEffect(() => {
        window.onload = function() {
            const discarded = getDataLS("discarded-cards")
            if (discarded) {
                setDiscardedList(discarded)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {        
        const discarded = getDataLS("discarded-cards")
        const found = discarded.find(x => String(x.number) === discardedNumberToBeFound.replace(/\s/g, "").toLowerCase())
        
        if (!discardedNumberToBeFound) {
            setNotFoundTxt("")
        } else {
            if (found) {
                setDiscardedList(discarded.filter(x => String(x.number) === String(found.number)))
                setNotFoundTxt("")
            } else {
                setNotFoundTxt("Ce numéro est incorrect ou ne correspond pas à cette étape, entrez un autre numéro !")
                setDiscardedList([...discarded])
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [discardedNumberToBeFound])

    return (
        <div>
            <h4>Cartes défaussées (Cards Discarded)</h4>
            <div>
                {discardedList && notFoundTxt === "" &&
                    discardedList.map((card, i) => (
                        <div key={i}>
                            <button onClick={() => console.log("bring back card "+card.number)} key={i}>
                                {card?.number}
                            </button>
                            <br/>
                        </div>
                    ))
                }
                    <p>{cardFound && cardFound.number}</p>
                    <p>{notFoundTxt}</p>       
            </div>
        </div>
    )
}
