import React from "react"

import Forward from "./Forward"
import CheckpointForward from "./CheckpointFoward"

export default function ForwardContainer({ setIsForward, initialFTime, isPenalty }) {
    return (
        <div>
            {
                initialFTime === null || initialFTime?.length === 0
                ? <Forward isPenalty={isPenalty} />
                : <CheckpointForward initialTime={initialFTime} setIsForward={setIsForward} isPenalty={isPenalty} />
            }
        </div>
    )
}
