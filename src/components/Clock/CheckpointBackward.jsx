import React, { useState, useEffect } from "react"
import Timer from "react-compound-timerv2"
import { storeDataLS } from "../../utils/helpers"

export default function CheckpointBackward({ initialTime, setIsForward }) {
    const [ count, setCount ] = useState(0)
    const [ storeTime, setStoreTime ] = useState(false)

    useEffect(() => {
        let interval = null
        interval = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [count])

    useEffect(() => {
        setStoreTime(true)
        const timeEl = document.getElementById("checkpoint-backward-time")
        if (storeTime) {
            storeDataLS("backward-time", timeEl.innerHTML)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    useEffect(() => {
        setStoreTime(false)
    }, [initialTime])

    return (
        <div className="timer">
            <Timer
                initialTime={Number(initialTime)} 
                direction="backward"
                checkpoints={[
                    {
                        time: 0,
                        callback: () => setIsForward(true),
                    }
                ]}
                onStart={() => console.log('onStart hook')}
            >
                {({ getTime }) => (
                    <>
                        <p id="checkpoint-backward-time">{getTime()}</p>
                        <Timer.Minutes formatValue={value => value === 0 ? "00" : value < 10 ? `0${value}` : value} />
                        <span> : </span>
                        <Timer.Seconds formatValue={value => value === 0 ? "00" : value < 10 ? `0${value}` : value} />
                    </>
                )}
            </Timer>
        </div>
    )
}
