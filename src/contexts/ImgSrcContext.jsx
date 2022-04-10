import React, { useState, createContext, useContext, useEffect } from "react"
import { getDataLS, storeDataLS } from "../utils/helpers"

const ImgSrcContext = createContext()

export const useImgSrc = () => useContext(ImgSrcContext)

export default function ImgSrcProvider({ children }) {
    const [ imgSrc, setImgSrc ] = useState(["/static/media/cardsynopsis.6792943482675a8c2d21.jpg"])

    useEffect(() => {
        const cardImgs = getDataLS("cards")
        setImgSrc(cardImgs)
    }, [])
    
    useEffect(() => {
        storeDataLS("cards", [...new Set(imgSrc)])
    }, [imgSrc])

    return (
        <ImgSrcContext.Provider value={{ imgSrc, setImgSrc }}>
            {children}
        </ImgSrcContext.Provider>
    )
}