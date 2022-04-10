import React from "react"

import Forward from "./Forward"
import CheckpointForward from "./CheckpointFoward"

export default function ForwardContainer({ setIsForward, initialFTime }) {
    return (
        <div>
            {
                initialFTime === null || initialFTime?.length === 0
                ? <Forward />
                : <CheckpointForward initialTime={initialFTime} setIsForward={setIsForward} />
            }
        </div>
    )
}
