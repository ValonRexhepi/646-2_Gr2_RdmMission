import React, { useEffect, useState } from "react"

export default function Timer() {
    const [ seconds, setSeconds ] = useState(59)
    const [ isActive, setIsActive ] = useState(false)

    useEffect(() => {
        setIsActive(true)
    }, [])

    useEffect(() => {
        let interval = null
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1)
            }, 1000)
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [isActive, seconds])

    return (
        <div>{seconds}</div>
    )
}
