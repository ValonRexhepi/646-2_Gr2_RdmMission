import React, { useEffect } from "react"
import "./styles/app.css"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import { db } from "./services/firebase"
import { onValue, ref } from "firebase/database"

import Onboarding from "./views/Onboarding"
import Rules from "./views/Rules"

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
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Onboarding />} />
                    <Route path="/rules" element={<Rules />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App
