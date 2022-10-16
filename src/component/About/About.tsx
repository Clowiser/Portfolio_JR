import React from "react";
import {
    SAboutContainer,
    SAboutSectionCV,
    SSectionPresentationContainer, SPhotoPresentationWrapper,
    SText, STitle, SAboutPhoto, SPhotoContainer, SParticuleBlue
} from "./About.styled";
import {useIntl} from "react-intl";
import Curriculum from "./Curriculum/Curriculum";
import circleJr from "../../style/assets/img/photo/circle_JR.png"
import blue_left from "../../style/assets/img/img/particules/blue-big-left.png"

const About = () => {
    const intl = useIntl();

    return (
        <SAboutContainer>
            <SSectionPresentationContainer>
                <STitle>{intl.formatMessage({id: "about_subtitle_about"})} </STitle>
                <SPhotoPresentationWrapper>
                    <SPhotoContainer>
                        <SAboutPhoto src={circleJr} alt="photo de Jessica Rigaud"/>
                        <SParticuleBlue src={blue_left} alt="particule bleu"/>
                    </SPhotoContainer>

                    <SText>
                        Je m'appelle Jessica Rigaud, originaire de Franche-Comté, j'ai grandi dans la région
                        Auvergne-Rhône-Alpes depuis mon enfance et vis aujourd'hui dans le département de la
                        Savoie.
                        J'ai été très vite charmée par la région qui regorge de richesses naturelles,
                        culturelles et
                        gastronomiques. C'est un lieu où il fait bon d'y vivre, d'y rire et d'y manger !
                    </SText>
                </SPhotoPresentationWrapper>
            </SSectionPresentationContainer>

            <SAboutSectionCV>
                <Curriculum/>
            </SAboutSectionCV>
        </SAboutContainer>
    );
}

export default About;