import {Route, Routes} from "react-router-dom";
import About from "../About/About";
import React from "react";
import Home from "../Home/Home";
import PortfolioWWDetailData from "../Portfolio/WebWork/PortfolioWWDetailData";
import PortfolioIndex from "../Portfolio/PortfolioIndex";
import Contact from "../Contact/Contact";
import PortfolioG3DDetailData from "../Portfolio/GraphicWork/3D/PortfolioG3DDetailData";
import PortfolioGDDetailData from "../Portfolio/GraphicWork/Digital/PortfolioGDDetailData";

const Router: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/portfolio" element={<PortfolioIndex/>}/>

            <Route path="/portfolio/WW/:id" element={<PortfolioWWDetailData/>}/>
            <Route path="/portfolio/3D/:id" element={<PortfolioG3DDetailData/>}/>
            <Route path="/portfolio/DG/:id" element={<PortfolioGDDetailData/>}/>

            <Route path="/about" element={<About/>}/>

            <Route path="/contact" element={<Contact/>}/>
        </Routes>

    );

}

export default Router;