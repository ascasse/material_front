import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Recent2 from "./pages/Recent2"
import ImageViewPage from "./pages/ImageViewPage"
import TitleViewPage from "./pages/TitleViewPage"

export const FrontRoutes = {
    recent: "/recent"
}

const AppRoutes = () => {
    return (
        <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/recent" element={<Recent2/>} />
             <Route path="/batch-images" exact element={<ImageViewPage/>} />
             <Route path="/batch-titles" exact element={<TitleViewPage/>} />
        </Routes>
    )
}

export default AppRoutes
