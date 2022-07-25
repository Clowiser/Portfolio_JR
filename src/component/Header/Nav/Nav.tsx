import logo_JR from "../../../style/assets/img/logo/JR_CA.png";
import france_flag from "../../../style/assets/img/flag/france.png"
import great_britain_flag from "../../../style/assets/img/flag/great_britain.png"
import React from "react";
import {SA, SFlagTranslateContainer, SImg, SNavContainer, SUl} from "./Nav.styled";

const Nav = () => {
    return (
        <SNavContainer>
            <SUl>
                <li><SImg src={logo_JR} alt="Logo du site Jessica Rigaud Créations"/></li>
                <SA to="/">
                    <li>Accueil</li>
                </SA>
                <SA to="/portfolio">
                    <li>Portfolio</li>
                </SA>
                <SA to="/biographie">
                    <li>Qui suis-je ?</li>
                </SA>
                <SFlagTranslateContainer>
                    <SA to="/biographie">
                        <li><SImg src={france_flag} alt="Drapeau Français"/></li>
                    </SA>
                    <SA to="/biographie">
                        <li><SImg src={great_britain_flag} alt="Drapeau anglais"/></li>
                    </SA>
                </SFlagTranslateContainer>
            </SUl>
        </SNavContainer>
    )
};

export default Nav;

