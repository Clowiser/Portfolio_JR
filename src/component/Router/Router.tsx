import {Route, Routes} from "react-router-dom";
import About from "../About/About";
import React from "react";
import Home from "../Home/Home";
import PortfolioDetailPage from "../Portfolio/WebWork/PortfolioDetailPage";
import PortfolioIndex from "../Portfolio/PortfolioIndex";
import Contact from "../Contact/Contact";

const Router: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/portfolio" element={<PortfolioIndex/>}/>
            <Route path="/portfolio/:id" element={<PortfolioDetailPage/>}/>

            <Route path="/about" element={<About/>}/>

            <Route path="/contact" element={<Contact/>}/>
        </Routes>

    );

}

export default Router;