import React from "react"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./styles/app.css"
import Onboarding from "./views/Onboarding";
import Rules from "./views/Rules";

function App() {
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
