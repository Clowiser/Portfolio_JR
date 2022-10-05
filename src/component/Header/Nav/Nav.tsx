import logo_JR from "../../../style/assets/img/logo/logo_JR.png"
import React from "react";
import {SA, SALogo, SAMenu, SJRLogo, SNavContainer, SUl} from "./Nav.styled";
import LocaleFlag from "./Flag/LocaleFlag";
import {useIntl} from "react-intl";
import contact from "../../../style/assets/img/img/contact.jpg"

const Nav = () => {
    const intl = useIntl();

    return (
        <SNavContainer>
            <SUl>
                <SALogo to="/">
                    <li><SJRLogo src={logo_JR} alt="Logo du site Jessica Rigaud Créations"/></li>
                </SALogo>

                <SAMenu>
                    <SA to="/">
                        <li title="home">{intl.formatMessage({id: 'home_title'})}</li>
                    </SA>
                    <SA to="/portfolio">
                        <li title="portfolio">{intl.formatMessage({id: 'portfolio_title'})}</li>
                    </SA>
                    <SA to="/about">
                        <li title="about">{intl.formatMessage({id: 'about_title'})}</li>
                    </SA>
                    <SA to="/contact">
                        <li title="contact">{intl.formatMessage({id: 'contact_title'})}</li>
                    </SA>
                    <LocaleFlag/>
                </SAMenu>
            </SUl>
        </SNavContainer>
    )
};

export default Nav;

