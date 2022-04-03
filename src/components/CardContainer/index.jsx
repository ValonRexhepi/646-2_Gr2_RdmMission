import React, { useEffect, useState } from "react"
import { storeDataLS, getDataLS } from "../../utils/helpers"

import Card from "./Card"

export default function CardContainer({ numberToBeFound }) {
    const [ imgSrc, setImgSrc ] = useState([])

    useEffect(() => {
        const cardImgs = getDataLS("cards")
        setImgSrc(cardImgs)
        console.log(cardImgs)
    }, [])

    useEffect(() => {
        if (numberToBeFound) {
            try {
                const src = require(`../../assets/cards/card${numberToBeFound}.jpg`)
                setImgSrc([...new Set([ ...imgSrc, src ])])
                storeDataLS("cards", [...new Set([ ...imgSrc, src ])])
            } catch {
                setImgSrc([...new Set([ ...imgSrc ])])
                storeDataLS("cards", [...new Set([ ...imgSrc ])])
                return
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numberToBeFound])

    return (
        <>
            {
                imgSrc 
                ? imgSrc.map((source, i) => <Card key={i} source={source} />)
                : null
            }
        </>
    )
}
