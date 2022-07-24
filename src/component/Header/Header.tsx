import React from "react";
import logo from "../../style/assets/img/logo/JR_CA.png"
import {Outlet} from "react-router-dom";
import {SA, SImg, SNavContainer, SUl} from "./Header.styled";

const Header = () => {
    return (
        <>
            <SNavContainer>
                <SUl>
                    <li><SImg src={logo} alt="Logo du site Jessica Rigaud Créations"/></li>
                    <SA to="/">
                        <li>Accueil</li>
                    </SA>
                    <SA to="/portfolio">
                        <li>Portfolio</li>
                    </SA>
                    <SA to="/biographie">
                        <li>Qui suis-je ?</li>
                    </SA>
                </SUl>
            </SNavContainer>
            <Outlet/>
        </>
    );
}

export default Header;