import React, { useState } from "react"

import Forward from "./Forward"
import Backward from "./Backward"

export default function Clock() {
    const [ isForward, setIsForward ] = useState(false)

    return (
        <div>
            {
                isForward
                ? <Forward />
                : <Backward setIsForward={setIsForward} />
            }
        </div>
    )
}
