import React, { useState, useEffect } from "react"
import cards from "../../constants/cards"

export default function CardList({ discardedNumberToBeFound }) {
    const [ cardFound, setCardFound ] = useState(null)
    const [ notFoundTxt, setNotFoundTxt ] = useState(null)
    const [ discardedList, setDiscardedList] = useState([])
    
    useEffect(() => {        

        for(var i= 0; i<cards.length;i++){
            if(cards[i].isDiscarded === true && discardedList.includes(cards[i].number)===false){
                discardedList.push(cards[i].number)
                console.log(discardedList)
            }
        }
        // cards.map(card => {
        //     })    

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
                {(cardFound === null) && discardedList &&
                    discardedList.map((number, i) => {
                        return(
                            <div>
                                <button onClick={() => console.log("bring back card "+number)} key={i}>
                                    {number}
                                </button>
                                <br/>
                            </div>)
                    })
                }
                    <p>{cardFound && cardFound.number}</p>
                    {/* {console.log(discardedList)} */}
                    <p>{notFoundTxt}</p>       
            </div>
        </div>
    )
}
