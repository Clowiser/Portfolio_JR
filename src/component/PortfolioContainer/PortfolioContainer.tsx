import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Router from "../Router/Router";
import React from "react";

interface IPortfolioContainer {
}

const PortfolioContainer = (props: IPortfolioContainer) => {

    return (
        <>
            <Header/>
            <Router/>
            <Footer/>
        </>);
}
export default PortfolioContainer;