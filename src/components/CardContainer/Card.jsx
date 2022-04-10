import React, { useRef, useState } from "react"
import Draggable from "react-draggable"

import CardToolbar from "./CardToolbar"

export default function Card({ source }) {
    const [ position, setPosition ] = useState({ x: 0, y: 0 })

    const cardRef = useRef(null)

    const cardPosition = useRef({
        position: "absolute",
        top: Math.floor(Math.random() * 50 ),
    });

    const handleDrag = (_, ui) => {
        cardRef.current.classList.add("moving")
        setPosition({ x: position.x + ui.deltaX, y: position.y + ui.deltaY })
    }

    return (
        <Draggable
            nodeRef={cardRef}
            onDrag={handleDrag}
        >
            <div 
                ref={cardRef}
                className="card"
                style={!source.includes("synopsis") && cardPosition.current}
            >
                {!source.includes("synopsis") && <CardToolbar source={source} />}

                <img 
                    src={source} 
                    alt="Card" 
                    width={640}
                />
            </div>
        </Draggable>
    )
}
