import React from "react"
import Card from "./Card"

export default function MinimizedCardContainer({ minimizedImgSrc, setMinimizedImgSrc, discardedList, setDiscardedList, imgSrc, setImgSrc }) {

    return (
        <>
            {
                minimizedImgSrc 
                ? minimizedImgSrc.map((source, i) => <Card key={i} source={source} discardedList={discardedList} setDiscardedList={setDiscardedList} minimizedImgSrc={minimizedImgSrc} setMinimizedImgSrc={setMinimizedImgSrc} imgSrc={imgSrc} setImgSrc={setImgSrc}/>)
                : null
            }
        </>
    )
}
