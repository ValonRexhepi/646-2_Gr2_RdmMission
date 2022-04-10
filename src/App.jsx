import React from "react"
import "./styles/app.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import SessionProvider from "./contexts/SessionContext"
import ImgSrcProvider from "./contexts/ImgSrcContext"
import CardProvider from "./contexts/CardContext"
import PopupProvider from "./contexts/PopupContext"
import HintSolutionProvider from "./contexts/HintSolutionContext"
import Onboarding from "./views/Onboarding"
import Rules from "./views/Rules"
import Game from "./views/Game"
// import Roadmap from "./views/Roadmap";

function App() {
    return (
        <div>
            <SessionProvider>
            <PopupProvider>
            <CardProvider>
            <ImgSrcProvider>
            <HintSolutionProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Onboarding />} />
                        <Route path="/rules" element={<Rules />}/>
                        <Route path="/:sessionId" element={<Game />}/>
                        {/* <Route path="/roadmap" element={<Roadmap />}/> */}
                    </Routes>
                </BrowserRouter>
            </HintSolutionProvider>
            </ImgSrcProvider>
            </CardProvider>
            </PopupProvider>
            </SessionProvider>
        </div>
    );
}

export default App
