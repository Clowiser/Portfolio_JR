import {Route, Routes} from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";
import Information from "../Information/Information";
import React from "react";
import Home from "../Home/Home";

const Router: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/biographie" element={<Information/>}/>
        </Routes>
    );

}

export default Router;