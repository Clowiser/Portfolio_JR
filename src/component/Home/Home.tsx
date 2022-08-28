import React from "react";
import {
    SHeaderContainer,
    SHeaderTitle, SHeaderWrapper, SHomeContainer, SImg,
    SPresentationContainer,
    SPresentationText,
    SPresentationTitle, SPresentationWrapper, SRealisationComponent, SSkillsComponent
} from "./Home.styled";
import {useIntl} from "react-intl";
import Realisation from "./Realisations/Realisation";
import Skills from "../Skills/Skills";
import avatar from "../../style/assets/img/banner/Avatar_dev.png"

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

            <SSkillsComponent>
                <Skills/>
            </SSkillsComponent>

            <SRealisationComponent>
                <Realisation/>
            </SRealisationComponent>
        </SHomeContainer>
    );
}

export default Home;