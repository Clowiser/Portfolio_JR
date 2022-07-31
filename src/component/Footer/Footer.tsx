import React from "react";
import {useIntl} from "react-intl";
import Counter from "../counter/Counter";
import {
    SFooterContainer,
    SMottoNetworkWrapper,
    SCopyrightWrapper,
    SNetworkLogo,
    SNetworkWrapper, SMotto
} from "./Footer.styled";
import logo_Github from "../../style/assets/img/logo/github_logo.png";
import logo_Linkedin from "../../style/assets/img/logo/linkedin_logo.png";
import logo_Gmail from "../../style/assets/img/logo/gmail_logo.png";

const Footer = () => {
    const intl = useIntl();
    return (
        <SFooterContainer>
            <SMottoNetworkWrapper>
                <SMotto>{intl.formatMessage({id: 'Footer_Motto'})}</SMotto>
                <SNetworkWrapper>
                    <SNetworkLogo src={logo_Linkedin}
                                  onClick={() => window.open("https://www.linkedin.com/in/jessicarigaud/")}/>
                    <SNetworkLogo src={logo_Github} onClick={() => window.open("https://github.com/Clowiser")}/>
                    <SNetworkLogo src={logo_Gmail}
                                  onClick={() => window.location.href = 'mailto:jessica.rigaud.wd@gmail.com'}/>
                </SNetworkWrapper>
                <SCopyrightWrapper>
                    {intl.formatMessage({id: 'Footer_copyright'})}
                </SCopyrightWrapper>
            </SMottoNetworkWrapper>
        </SFooterContainer>
    );
}

export default Footer;