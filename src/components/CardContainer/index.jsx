import React, { useEffect, useState } from "react"

import Card from "./Card"

export default function CardContainer({ numberToBeFound }) {
    const [ imgSrc, setImgSrc ] = useState([])

    useEffect(() => {
        if (numberToBeFound) {
            try {
                const src = require(`../../assets/cards/card${numberToBeFound}.jpg`)
                setImgSrc([...new Set([ ...imgSrc, src ])])
            } catch {
                setImgSrc([...new Set([ ...imgSrc ])])
                return
            }
        } else {
            setImgSrc([...new Set([ ...imgSrc ])])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numberToBeFound])


    return (
        <>
            {
                imgSrc 
                ? imgSrc.map((source, i) => (
                    <Card key={i} index={i} source={source} />
                ))
                : null
            }
        </>
    )
}
