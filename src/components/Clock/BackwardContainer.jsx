import React from "react"

import Backward from "./Backward"
import CheckpointBackward from "./CheckpointBackward"

export default function BackwardContainer({ initialBTime, setIsForward, isPenalty }) {
    return (
        <div>
            {
                initialBTime === null || initialBTime?.length === 0
                ? <Backward setIsForward={setIsForward} isPenalty={isPenalty} />
                : <CheckpointBackward initialTime={initialBTime} setIsForward={setIsForward} isPenalty={isPenalty} />
            }
        </div>
    )
}
