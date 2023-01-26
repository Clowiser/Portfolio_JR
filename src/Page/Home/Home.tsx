import React from "react";
import {
    SHomeHeaderContainer,
    STitle, SHomeHeaderWrapper, SImg,
    SPresentationContainer,
    SPresentationText,
    SPresentationTitle, SPresentationWrapper,
} from "./Home.styled";
import {useIntl} from "react-intl";
import AheadProjects from "./AheadProjects/AheadProjects";
import Skills from "../Skills/Skills";
import avatar from "../../style/assets/img/banner/Avatar_dev-min.png"

const Home = () => {
    const intl = useIntl();

    return (
        <>
            <SHomeHeaderContainer>
                <SHomeHeaderWrapper>
                    <STitle>
                        {intl.formatMessage({id: 'home_header_title'})}
                    </STitle>
                </SHomeHeaderWrapper>
                <SImg src={avatar} alt="logo JR"/>
            </SHomeHeaderContainer>

            <SPresentationContainer>
                <SPresentationWrapper>
                    <SPresentationTitle>{intl.formatMessage({id: 'home_welcome_message'})}</SPresentationTitle>
                    <SPresentationText>{intl.formatMessage({id: 'home_reconversion_text'})}</SPresentationText>
                </SPresentationWrapper>
            </SPresentationContainer>

            <Skills/>
            <AheadProjects/>
        </>
    );
}

export default Home;