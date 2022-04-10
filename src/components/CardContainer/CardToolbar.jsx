import React from "react"
import { HiOutlineLightBulb } from "react-icons/hi"
import { GiMagnifyingGlass } from "react-icons/gi"
import { HiOutlineX } from 'react-icons/hi'
import { Tooltip } from "@mui/material"
import { usePopup } from "../../contexts/PopupContext"
import { useCard } from "../../contexts/CardContext"
import cards from "../../constants/cards"

export default function CardToolbar({ source }) {
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

    return (
        <section className="card-toolbar">
            <Tooltip title="Hint">
                <button onClick={showHint}>
                    <GiMagnifyingGlass />
                </button>
            </Tooltip>
            <Tooltip title="Solution">
                <button onClick={showSolution}>
                    <HiOutlineLightBulb />
                </button>
            </Tooltip>
            <Tooltip title="Close">
                <button onClick={console.log("source:" + source)}>
                    <HiOutlineX />
                </button>
            </Tooltip>
        </section>
    )
}
