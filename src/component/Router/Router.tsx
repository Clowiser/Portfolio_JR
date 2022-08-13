import {Route, Routes} from "react-router-dom";
import PortfolioWebWork from "../Portfolio/WebWork/PortfolioWebWork";
import Information from "../Information/Information";
import React from "react";
import Home from "../Home/Home";
import PortfolioDetailPage from "../ unguarded/PortfolioDetailPage";
import PortfolioIndex from "../Portfolio/PortfolioIndex";

const Router: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/portfolio" element={<PortfolioIndex/>}/>
            {/*<Route path="/portfolio/:portfolioId" element={<PortfolioDetailPage/>}/>*/}

            <Route path="/about" element={<Information/>}/>

        </Routes>
    );

}

export default Router;