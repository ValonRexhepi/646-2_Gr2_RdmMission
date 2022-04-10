import React, { useEffect } from "react"
import { useImgSrc } from "../../contexts/ImgSrcContext"

import Card from "./Card"

export default function CardContainer({ numberToBeFound }) {
    const { imgSrc, setImgSrc } = useImgSrc()

    useEffect(() => {
        if (numberToBeFound) {
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
                ? imgSrc.map((source, i) => <Card key={i} source={source} />)
                : null
            }
        </>
    )
}
