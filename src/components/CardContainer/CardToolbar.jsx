import React from "react"
import { HiOutlineLightBulb } from "react-icons/hi"
import { GiMagnifyingGlass } from "react-icons/gi"
import { HiOutlineX } from 'react-icons/hi'
import { FiMinimize } from 'react-icons/fi'
import { Tooltip } from "@mui/material"
import { usePopup } from "../../contexts/PopupContext"
import { useCard } from "../../contexts/CardContext"
import { useImgSrc } from "../../contexts/ImgSrcContext"
import cards from "../../constants/cards"
import { storeDataLS } from "../../utils/helpers"

export default function CardToolbar({ source, discardedList, setDiscardedList, minimizedImgSrc, setMinimizedImgSrc }) {
    const { setContent } = usePopup()
    const { setCard } = useCard()
    const { imgSrc, setImgSrc } = useImgSrc()

    const showHint = () => {
        setContent({ isOpen: true, msg: "Un indice vous coûte 30 secondes. Êtes-vous sûr de vouloir continuer ?" })
        const selected = source?.split("/")[3]?.split(".")[0]
        const card = cards?.find(x => `card${x?.number}` === selected?.toLowerCase())
        setCard(card)
    }

    const showSolution = () => {
        setContent({ isOpen: true, msg: "La solution vous coûte 1 minute. Êtes-vous sûr de vouloir continuer ?" })
        const selected = source?.split("/")[3]?.split(".")[0]
        const card = cards?.find(x => `card${x?.number}` === selected?.toLowerCase())
        setCard(card)
    }

    const discardCard = () => {
        const selected = (source?.split("/")[3]?.split(".")[0]).toLowerCase()
        const cardIndex = cards?.findIndex((num => `card${num?.number}` === selected))
        if(discardedList.findIndex(x => x.number === cards[cardIndex].number) === -1) {
            setDiscardedList([...discardedList, cards[cardIndex]])
            storeDataLS("discarded-cards", [...discardedList, cards[cardIndex]])
            if (cards && cardIndex !== -1) {
                cards[cardIndex].isDiscarded = true
            }
            setImgSrc(imgSrc.filter(x => x !== source))
        }                          
    }

    const minimizeCard = () => {
        setMinimizedImgSrc([...minimizedImgSrc, source])
        setImgSrc(imgSrc.filter(x => x !== source))
    }


    return (
        <section className="card-toolbar">
            <Tooltip title="Indice">
                <button onClick={showHint}>
                    <GiMagnifyingGlass />
                </button>
            </Tooltip>
            <Tooltip title="Solution">
                <button onClick={showSolution}>
                    <HiOutlineLightBulb />
                </button>
            </Tooltip>
            <Tooltip title="Réduire">
                <button onClick={minimizeCard}>
                    <FiMinimize />
                </button>
            </Tooltip>

            <Tooltip title="Fermer">
                <button onClick={discardCard}>
                    <HiOutlineX />
                </button>
            </Tooltip>
        </section>
    )
}
