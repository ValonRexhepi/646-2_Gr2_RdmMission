import React from "react"
import "./styles/app.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import SessionProvider from "./contexts/SessionContext"
import Onboarding from "./views/Onboarding"
import Rules from "./views/Rules"
import Game from "./views/Game"
import Roadmap from "./views/Roadmap";

function App() {
    return (
        <div>
            <SessionProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Onboarding />} />
                        <Route path="/rules" element={<Rules />}/>
                        <Route path="/game/:sessionId" element={<Game />}/>
                        <Route path="/roadmap" element={<Roadmap />}/>
                    </Routes>
                </BrowserRouter>
            </SessionProvider>
        </div>
    );
}

export default App
