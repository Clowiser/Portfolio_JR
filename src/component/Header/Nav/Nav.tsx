import logo_JR from "../../../style/assets/img/logo/JR_logo.png"
import React from "react";
import {SA, SJRLogo, SNavContainer, SUl} from "./Nav.styled";
import LocaleFlag from "./Flag/LocaleFlag";
import {useIntl} from "react-intl";

const Nav = () => {
    const intl = useIntl();

    return (
        <SNavContainer>
            <SUl>
                <SA to="/">
                    <li><SJRLogo src={logo_JR} alt="Logo du site Jessica Rigaud Créations"/></li>
                </SA>
                <SA to="/">
                    <li>{intl.formatMessage({id: 'home_title'})}</li>
                </SA>
                <SA to="/portfolio">
                    <li>{intl.formatMessage({id: 'portfolio_title'})}</li>
                </SA>
                <SA to="/about">
                    <li>{intl.formatMessage({id: 'about_title'})}</li>
                </SA>
                <LocaleFlag/>
            </SUl>
        </SNavContainer>
    )
};

export default Nav;

