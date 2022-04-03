import React, { useRef } from "react"

export default function Card({ index, source }) {
    const cardPosition = useRef({
        position: "absolute",
        top: Math.floor(Math.random() * 50 ),
    });

    return (
        <div 
            className={`card card-${index}`} 
            style={cardPosition.current}
        >
            <img 
                src={source} 
                alt="Card" 
                className={`card-img card-img-${index}`}
                width={660}
            />
        </div>
    )
}
