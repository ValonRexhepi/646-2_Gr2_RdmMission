import React from "react"
import { HiOutlineLightBulb } from "react-icons/hi"
import { GiMagnifyingGlass } from "react-icons/gi"
import { HiOutlineX } from 'react-icons/hi'
import { FiMaximize } from 'react-icons/fi'
import { Tooltip } from "@mui/material"
import { usePopup } from "../../contexts/PopupContext"
import { useCard } from "../../contexts/CardContext"
import cards from "../../constants/cards"
import { storeDataLS } from "../../utils/helpers"

export default function CardToolbar({ source, discardedList, setDiscardedList, minimizedImgSrc, setMinimizedImgSrc, imgSrc, setImgSrc }) {
    const { setContent } = usePopup()
    const { setCard } = useCard()

    const showHint = () => {
        setContent({ isOpen: true, msg: "Showing hint costs 30 seconds of your time are you sure to continue?" })
        const selected = source?.split("/")[3]?.split(".")[0]
        const card = cards?.find(x => `card${x?.number}` === selected?.toLowerCase())
        setCard(card)
    }

    const showSolution = () => {
        setContent({ isOpen: true, msg: "Showing solution costs 1 minute of your time are you sure to continue?" })
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
            setMinimizedImgSrc(minimizedImgSrc.filter(x => x !== source))
        }                           
    }

    const maximizeCard = () => {
        setMinimizedImgSrc(minimizedImgSrc.filter(x => x !== source))
        setImgSrc(imgSrc.filter(x => x !== source))
        setImgSrc([...imgSrc, source])
    }

    return (
        <section className="minimizedCard-toolbar">
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
            <Tooltip title="Agrandir">
                <button onClick={maximizeCard}>
                    <FiMaximize />
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
