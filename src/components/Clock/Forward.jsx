import React from "react"
import Timer from "react-compound-timerv2"

export default function Forward() {
    /* <Timer.Hours formatValue={value => value === 0 && "00"} />
    <span> : </span> */
    return (
        <div className="timer forward">
            <Timer direction="forward">
                {() => (
                    <>
                        <span> - </span>
                        <Timer.Minutes formatValue={value => value === 0 ? "00" : value < 10 ? `0${value}` : value} />
                        <span> : </span>
                        <Timer.Seconds formatValue={value => value === 0 ? "00" : value < 10 ? `0${value}` : value} />
                    </>
                )}
            </Timer>
        </div>
    )
}
