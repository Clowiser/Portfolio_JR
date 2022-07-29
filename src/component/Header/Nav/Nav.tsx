import logo_JR from "../../../style/assets/img/logo/JR_CA.png";
import React from "react";
import {SA, SImgFlag, SNavContainer, SUl} from "./Nav.styled";
import LocaleFlag from "./LocaleFlag";

interface INav {

}

const Nav = (props: INav) => {


    return (
        <SNavContainer>
            <SUl>
                <li><SImgFlag src={logo_JR} alt="Logo du site Jessica Rigaud Créations"/></li>
                <SA to="/">
                    <li>Accueil</li>
                </SA>
                <SA to="/portfolio">
                    <li>Portfolio</li>
                </SA>
                <SA to="/biographie">
                    <li>Qui suis-je ?</li>
                </SA>
                <LocaleFlag/>
            </SUl>
        </SNavContainer>
    )
};

export default Nav;

