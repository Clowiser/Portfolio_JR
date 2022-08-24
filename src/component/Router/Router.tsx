import {Route, Routes} from "react-router-dom";
import PortfolioWebWork from "../Portfolio/WebWork/PortfolioWebWork";
import About from "../About/About";
import React from "react";
import Home from "../Home/Home";
import PortfolioDetailPage from "../ unguarded/PortfolioDetailPage";
import PortfolioIndex from "../Portfolio/PortfolioIndex";
import AboutChrono from "../About/AboutChrono";

const Router: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/portfolio" element={<PortfolioIndex/>}/>
            <Route path="/portfolio/:id" element={<PortfolioDetailPage/>}/>

            <Route path="/about" element={<About/>}/>

            <Route path="/aboutChrono" element={<AboutChrono/>}/>

        </Routes>
    );

}

export default Router;