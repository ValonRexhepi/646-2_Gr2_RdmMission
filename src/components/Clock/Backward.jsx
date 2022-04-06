import React from "react"
import Timer from "react-compound-timerv2"

export default function Backward({ setIsForward }) {
    /* <Timer.Hours formatValue={value => value === 1 || value === 0 && "00"} />
    <span> : </span> */
    return (
        <div className="timer">
            <Timer
                initialTime={1000 * 60 * 60} 
                direction="backward"
                checkpoints={[
                    {
                        time: 0,
                        callback: () => setIsForward(true),
                    },
                ]}
            >
                {() => (
                    <>
                        <Timer.Minutes formatValue={value => value === 0 ? "00" : value < 10 ? `0${value}` : value} />
                        <span> : </span>
                        <Timer.Seconds formatValue={value => value === 0 ? "00" : value < 10 ? `0${value}` : value} />
                    </>
                )}
            </Timer>
        </div>
    )
}
