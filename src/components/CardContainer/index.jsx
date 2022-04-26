import React, { useEffect } from "react"
import Card from "./Card"

export default function CardContainer({ numberToBeFound, discardedList, setDiscardedList, imgSrc, setImgSrc, minimizedImgSrc, setMinimizedImgSrc }) {

    useEffect(() => {
        if (numberToBeFound && discardedList.find(x => x.number.toString() === numberToBeFound.toLowerCase())===undefined) {
            try {
                const src = require(`../../assets/cards/card${numberToBeFound}.jpg`)
                setImgSrc([...new Set([ ...imgSrc, src ])])
            } catch {
                setImgSrc([...new Set([ ...imgSrc ])])
                return
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numberToBeFound])

    return (
        <>
            {
                imgSrc 
                ? imgSrc.map((source, i) => <Card key={i} source={source} discardedList={discardedList} setDiscardedList={setDiscardedList} minimizedImgSrc={minimizedImgSrc} setMinimizedImgSrc={setMinimizedImgSrc}/>)
                : null
            }
        </>
    )
}
