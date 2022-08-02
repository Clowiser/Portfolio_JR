import React from "react";
import {
    SHeaderContainer,
    SHeaderTitle,
    SPresentationContainer, SPresentationLink,
    SPresentationText,
    SPresentationTitle, SPresentationWrapper
} from "./Home.styled";
import BannerAnimation from "../BannerAnimation/BannerAnimation";
import {useIntl} from "react-intl";
import Realisation from "./Realisations/Realisation";
import Skills from "../Skills/Skills";

const Home = () => {
    const intl = useIntl();

    return (
        <>
            <SHeaderContainer>
                <SHeaderTitle>
                    {intl.formatMessage({id: 'home_header_title'})}
                </SHeaderTitle>
            </SHeaderContainer>
            <BannerAnimation/>
            <SPresentationContainer>
                <SPresentationWrapper>
                    <SPresentationTitle>{intl.formatMessage({id: 'home_welcome_message'})}</SPresentationTitle>
                    <SPresentationText>{intl.formatMessage({id: 'home_reconversion_text'})}</SPresentationText>
                    <SPresentationText>{intl.formatMessage({id: 'home_find_creation'})}</SPresentationText>
                    <SPresentationLink
                        to="/portfolio">{intl.formatMessage({id: 'portfolio_title'})}</SPresentationLink>
                </SPresentationWrapper>
            </SPresentationContainer>
            <Skills/>
            <Realisation/>
        </>
    );
}

export default Home;