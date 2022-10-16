import React from "react";
import {
    SAboutContainer,
    SAboutSectionCV,
    SAboutSectionPresentationContainer, SAboutTextContainer,
    SAboutText, STitle
} from "./About.styled";
import {useIntl} from "react-intl";
import Curriculum from "./Curriculum/Curriculum";

const About = () => {
    const intl = useIntl();

    return (
        <SAboutContainer>
            <SAboutSectionPresentationContainer>
                <STitle>{intl.formatMessage({id: "about_subtitle_about"})} </STitle>
                <SAboutTextContainer>
                    <SAboutText>
                        <p style={{color: "white", padding: "2rem"}}>
                            Je m'appelle Jessica Rigaud, originaire de Franche-Comté, j'ai grandi dans la région
                            Auvergne-Rhône-Alpes depuis mon enfance et vis aujourd'hui dans le département de la
                            Savoie.
                            J'ai été très vite charmée par la région qui regorge de richesses naturelles,
                            culturelles et
                            gastronomiques. C'est un lieu où il fait bon d'y vivre, d'y rire et d'y manger !</p>
                    </SAboutText>
                </SAboutTextContainer>
            </SAboutSectionPresentationContainer>

            <SAboutSectionCV>
                <Curriculum/>
            </SAboutSectionCV>
        </SAboutContainer>
    );
}

export default About;