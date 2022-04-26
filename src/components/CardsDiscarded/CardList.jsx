import React, { useState, useEffect } from "react"
<<<<<<< HEAD
import { getDataLS } from "../../utils/helpers"

export default function CardList({ discardedNumberToBeFound, discardedList, setDiscardedList, imgSrc, setImgSrc, retrieveCard }) {
    const [ cardFound,  ] = useState(null)
    const [ notFoundTxt, setNotFoundTxt ] = useState(null)
<<<<<<< HEAD
=======
    const [ discardedList, setDiscardedList] = useState([])
    
    useEffect(() => {        
=======
// import cards from "../../constants/cards"
import { getDataLS } from "../../utils/helpers"

export default function CardList({ discardedNumberToBeFound, discardedList, setDiscardedList }) {
    const [ cardFound,  ] = useState(null)
    const [ notFoundTxt, setNotFoundTxt ] = useState(null)
    // const discarded = getDataLS("discarded-cards")
    // const [ discardedList, setDiscardedList] = useState([])
>>>>>>> c3537f3 (Seems working for now)

    useEffect(() => {
        window.onload = function() {
            const discarded = getDataLS("discarded-cards")
            if (discarded) {
                setDiscardedList(discarded)
                discarded.forEach(c => {
                    const cardEl = document.querySelector(`#card${c.number}`)
                    if (cardEl) {
                        cardEl.style.visibility = "hidden"
                    }
                })
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {        

        // for(var i= 0; i<cards.length;i++){
        //     if(cards[i].isDiscarded === true && discardedList.includes(cards[i].number)===false){
        //         discardedList.push(cards[i].number)
        //         console.log(discardedList)
        //     }
        // }
        // cards.map(card => {
        //     })    

<<<<<<< HEAD
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
=======
        // if (cards) {
        //     const found = cards.find(x => String(x.number) === discardedNumberToBeFound.replace(/\s/g, "").toLowerCase())

        //     if (found) {
        //         if (found.isDiscarded) {
        //             setNotFoundTxt("")
        //             setCardFound(found)
        //             console.log("discarded")
        //         } else {
        //             setCardFound(null)
        //             setNotFoundTxt("")
        //             console.log("not discarded")
        //         }   
        //     } else {
        //         setCardFound(null)
        //         discardedNumberToBeFound
        //         ? setNotFoundTxt("Ce numéro est incorrect ou ne correspond pas à cette étape, entrez un autre numéro !")
        //         : setNotFoundTxt("")
        //     }
        // }
        const discarded = getDataLS("discarded-cards")
        const found = discarded.find(x => String(x.number) === discardedNumberToBeFound.replace(/\s/g, "").toLowerCase())
>>>>>>> c3537f3 (Seems working for now)
        
        if (!discardedNumberToBeFound) {
            setNotFoundTxt("")
        } else {
            if (found) {
                setDiscardedList(discarded.filter(x => String(x.number) === String(found.number)))
                setNotFoundTxt("")
            } else {
                setNotFoundTxt("Ce numéro est incorrect ou ne correspond pas à cette étape, entrez un autre numéro !")
<<<<<<< HEAD
                setDiscardedList([...discarded])
=======
                setDiscardedList([])
>>>>>>> c3537f3 (Seems working for now)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [discardedNumberToBeFound])

    return (
        <div>
            <h4>Cartes défaussées (Cards Discarded)</h4>
            <div>
<<<<<<< HEAD
<<<<<<< HEAD
                {discardedList && notFoundTxt === "" &&
                    discardedList.map((card, i) => (
                        <div key={i}>
                            <button onClick={() => retrieveCard(card.number)} key={i}>
=======
                {discardedList &&
                    discardedList.map((card, i) => (
                        <div key={i}>
                            <button onClick={() => console.log("bring back card "+card.number)} key={i}>
>>>>>>> c3537f3 (Seems working for now)
                                {card?.number}
                            </button>
                            <br/>
                        </div>
                    ))
<<<<<<< HEAD
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
=======
>>>>>>> c3537f3 (Seems working for now)
                }
                    <p>{cardFound && cardFound.number}</p>
                    {/* {console.log(discardedList)} */}
                    <p>{notFoundTxt}</p>       
            </div>
        </div>
    )
}
