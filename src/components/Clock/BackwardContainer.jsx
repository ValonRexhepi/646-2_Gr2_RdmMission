import React from "react"

import Backward from "./Backward"
import CheckpointBackward from "./CheckpointBackward"

export default function BackwardContainer({ initialBTime, setIsForward }) {
    return (
        <div>
            {
                initialBTime === null || initialBTime?.length === 0
                ? <Backward setIsForward={setIsForward} />
                : <CheckpointBackward initialTime={initialBTime} setIsForward={setIsForward} />
            }
        </div>
    )
}
