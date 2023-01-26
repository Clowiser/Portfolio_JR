import logo_JR from "../../../style/assets/img/logo/logo_JR.png"
import React from "react";
import {SLink, SLogoLink, STitleNavWrapper, SJRLogo, SNavContainer, SUl} from "./Nav.styled";
import LocaleFlag from "./Flag/LocaleFlag";
import {useIntl} from "react-intl";

const Nav = () => {
    const intl = useIntl();

    return (
        <SNavContainer>
            <SUl>
                <SLogoLink to="/">
                    <li><SJRLogo src={logo_JR} alt="Logo du site Jessica Rigaud Créations"/></li>
                </SLogoLink>

                <STitleNavWrapper>
                    <SLink to="/">
                        <li title="home">{intl.formatMessage({id: 'home_title'})}</li>
                    </SLink>
                    <SLink to="/portfolio">
                        <li title="portfolio">{intl.formatMessage({id: 'portfolio_title'})}</li>
                    </SLink>
                    <SLink to="/about">
                        <li title="about">{intl.formatMessage({id: 'about_title'})}</li>
                    </SLink>
                    <SLink to="/contact">
                        <li title="contact">{intl.formatMessage({id: 'contact_title'})}</li>
                    </SLink>
                    
                    <LocaleFlag/>
                </STitleNavWrapper>
            </SUl>
        </SNavContainer>
    )
};

export default Nav;
