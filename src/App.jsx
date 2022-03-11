import React, { useEffect } from "react"
import "./styles/app.css"
import { db } from "./services/firebase"
import { onValue, ref } from "firebase/database"

function App() {
    // Testing database connection
    useEffect(() => {
        onValue(ref(db), snapshot => {
            const data = snapshot.val()
            if (data !== null) {
                console.log(data)
            } else {
                console.log("There's no data")
            }
        })
    }, [])

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

export default App
