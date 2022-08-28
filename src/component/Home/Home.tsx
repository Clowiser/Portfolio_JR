import React from "react";
import {
    SHeaderContainer,
    SHeaderTitle, SHeaderWrapper, SHomeContainer, SImg,
    SPresentationContainer, SPresentationLink,
    SPresentationText,
    SPresentationTitle, SPresentationWrapper
} from "./Home.styled";
import BannerAnimation from "../BannerAnimation/BannerAnimation";
import {useIntl} from "react-intl";
import Realisation from "./Realisations/Realisation";
import Skills from "../Skills/Skills";
import avatar from "../../style/assets/img/banner/Avatardev.png"
import LogoPage from "./LogoPage/LogoPage";

const Home = () => {
    const intl = useIntl();

    return (
        <SHomeContainer>
            <SHeaderContainer>
                <SHeaderWrapper>
                    <SHeaderTitle>
                        {intl.formatMessage({id: 'home_header_title'})}
                    </SHeaderTitle>
                </SHeaderWrapper>
                <SImg src={avatar} alt="logo JR"/>
            </SHeaderContainer>

            <SPresentationContainer>
                <SPresentationWrapper>
                    <SPresentationTitle>{intl.formatMessage({id: 'home_welcome_message'})}</SPresentationTitle>
                    <SPresentationText>{intl.formatMessage({id: 'home_reconversion_text'})}</SPresentationText>
                </SPresentationWrapper>
            </SPresentationContainer>

            <Skills/>

            <Realisation/>
        </SHomeContainer>
    );
}

export default Home;