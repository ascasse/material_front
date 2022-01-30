import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Recent from "./pages/Recent"
import Recent2 from "./pages/Recent2"
import ImageViewPage from "./pages/ImageViewPage"

export const FrontRoutes = {
    recent: "/recent"
}

const AppRoutes = () => {
    return (
        <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/recent" element={<Recent2/>} />
             <Route path="/recent2" element={<Recent2/>} />
             <Route path="/batch-images" exact element={<ImageViewPage/>} />
        </Routes>
    )
}

export default AppRoutes
