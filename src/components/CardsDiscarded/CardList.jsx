import React, { useState, useEffect } from "react"
import { getDataLS } from "../../utils/helpers"

export default function CardList({ discardedNumberToBeFound, discardedList, setDiscardedList, imgSrc, setImgSrc, retrieveCard }) {
    const [ cardFound,  ] = useState(null)
    const [ notFoundTxt, setNotFoundTxt ] = useState(null)
<<<<<<< HEAD
=======
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
>>>>>>> 64beb0a (partially working discard card)

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
        const found = discarded.find(x => String(x?.number) === discardedNumberToBeFound.replace(/\s/g, "").toLowerCase())
        
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
<<<<<<< HEAD
                {discardedList && notFoundTxt === "" &&
                    discardedList.map((card, i) => (
                        <div key={i}>
                            <button onClick={() => retrieveCard(card.number)} key={i}>
                                {card?.number}
                            </button>
                            <br/>
                        </div>
                    ))
=======
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
>>>>>>> 64beb0a (partially working discard card)
                }
                    <p>{cardFound && cardFound.number}</p>
                    {/* {console.log(discardedList)} */}
                    <p>{notFoundTxt}</p>       
            </div>
        </div>
    )
}
