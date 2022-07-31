import logo_JR from "../../../style/assets/img/logo/JR_CA.png";
import React from "react";
import {SA, SImgFlag, SNavContainer, SUl} from "./Nav.styled";
import LocaleFlag from "./Flag/LocaleFlag";
import {useIntl} from "react-intl";

interface INav {

}

const Nav = (props: INav) => {
    const intl = useIntl();

    return (
        <SNavContainer>
            <SUl>
                <li><SImgFlag src={logo_JR} alt="Logo du site Jessica Rigaud Créations"/></li>
                <SA to="/">
                    <li>{intl.formatMessage({id: 'home_title'})}</li>
                </SA>
                <SA to="/portfolio">
                    <li>{intl.formatMessage({id: 'portfolio_title'})}</li>
                </SA>
                <SA to="/biographie">
                    <li>{intl.formatMessage({id: 'biographie_title'})}</li>
                </SA>
                <LocaleFlag/>
            </SUl>
        </SNavContainer>
    )
};

export default Nav;

