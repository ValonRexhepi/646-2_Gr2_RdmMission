import React, { useState, useEffect } from "react"
import Timer from "react-compound-timerv2"
import { storeDataLS } from "../../utils/helpers"
import { usePopup } from "../../contexts/PopupContext"
import { useHintSolution } from "../../contexts/HintSolutionContext"
import { useCard } from "../../contexts/CardContext"

export default function Forward({ isPenalty }) {
    const { content } = usePopup()
    const { setHintSolution } = useHintSolution()
    const { card } = useCard()
    const [ count, setCount ] = useState(0)
    const [ storeTime, setStoreTime ] = useState(false)
    const [ updateTime, setUpdateTime ] = useState(false)

    useEffect(() => {
        let interval = null
        interval = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [count])

    useEffect(() => {
        const timeEl = document.getElementById("forward-time")
        const forwardTime = timeEl.innerHTML
        setStoreTime(true)
        setUpdateTime(true)
        const stopBtn = document.querySelector(".stop-btn")
        if (storeTime && updateTime && content.isHint) {
            stopBtn.click()
            setHintSolution({ 
                isOpen: true, 
                isHint: true, 
                text: card.hint, 
                key: "forward-time",
                time: String(Math.abs(Number(forwardTime) + (30 * 1000)))
            })
        } else if (storeTime && updateTime && content.isSolution) {
            stopBtn.click()
            setHintSolution({ 
                isOpen: true, 
                isHint: false, 
                text: card.solution,
                key: "forward-time",
                time: String(Math.abs(Number(forwardTime) + (60 * 1000)))
            })
        }

        if (storeTime && isPenalty) {
            storeDataLS("forward-time", String(Math.abs(Number(forwardTime) + (60 * 1000))))
            window.location.reload(true)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content, updateTime, content, isPenalty])

    useEffect(() => {
        setStoreTime(true)
        const timeEl = document.getElementById("forward-time")
        if (storeTime) {
            storeDataLS("forward-time", timeEl.innerHTML)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    useEffect(() => {
        setStoreTime(false)
        setUpdateTime(false)
    }, [])

    return (
        <div className="timer forward">
            <Timer direction="forward">
                {({ getTime, stop }) => (
                    <>
                        <p id="forward-time">{getTime()}</p>
                        <button className="stop-btn" onClick={stop}>Stop</button>
                        <span> + </span>
                        <Timer.Minutes formatValue={value => value === 0 ? "00" : value < 10 ? `0${value}` : value} />
                        <span> : </span>
                        <Timer.Seconds formatValue={value => value === 0 ? "00" : value < 10 ? `0${value}` : value} />
                    </>
                )}
            </Timer>
        </div>
    )
}
