import React from "react";
import {
    SAboutContainer,
    SAboutPhoto,
    SAboutSectionCV,
    SAboutSectionPresentation, SAboutSectionPresentationContainer, SAboutTextContainer,
    SAboutTextLeft,
    SAboutTextRight
} from "./About.styled";
import jessica_photo from "../../style/assets/img/photo/Jessica Rigaud-min.jpg"

const About = () => {
    return (
        <SAboutContainer>
            <SAboutSectionPresentationContainer>
                <SAboutSectionPresentation>
                    <SAboutPhoto src={jessica_photo} alt="Jessica Rigaud photo smile"/>
                    <SAboutTextContainer>
                        <SAboutTextLeft>
                            <p style={{color: "white", padding: "2rem"}}>
                                Je m'appelle Jessica Rigaud, originaire de Franche-Comté, j'ai grandi dans la région
                                Auvergne-Rhône-Alpes depuis mon enfance et vis aujourd'hui dans le département de la
                                Savoie.
                                J'ai été très vite charmée par la région qui regorge de richesses naturelles,
                                culturelles et
                                gastronomiques. C'est un lieu où il fait bon d'y vivre, d'y rire et d'y manger !</p>
                        </SAboutTextLeft>
                        <SAboutTextRight>
                            <p style={{padding: "2rem"}}>
                                Avec 2 années en école de graphisme et 7 ans d'expériences dans le secteur de
                                l’hôtellerie-restauration, je me tourne vers les métiers du développement web qui allie
                                ma
                                passion : la créativité et mon envie d'évolution dans les outils techniques, afin
                                d’exercer
                                une
                                activité plus en phase avec ma personnalité créative, enthousiaste et releveuse de
                                défis.
                            </p>
                        </SAboutTextRight>
                        <SAboutTextLeft>
                            <p style={{color: "white", padding: "2rem"}}>
                                Artiste en herbe connectée et curieuse, j’apprends de
                                tout tous les jours et ne connais donc pas l’ennui. Animée par les nouvelles
                                technologies et
                                leurs évolutions, je me passionne pour la conception d'applications et de sites Web
                                innovants,
                                accessibles et fonctionnels. Dans cet objectif, je suis ouverte sur l'apprentissage du
                                développement front-end et du back-end, avec une spécialité en IOT, qui me donneront
                                toutes
                                les
                                compétences me permettant de travailler sur chaque étape de création, allant du
                                développement à
                                la production.
                            </p>
                        </SAboutTextLeft>
                        <SAboutTextRight>
                            <p style={{padding: "2rem"}}>
                                Actuellement en reconversion professionnelle au Campus Numérique in the ALPS 2021-2022
                                de
                                Chambéry, j'ai auparavant débuté mon entrée dans l'univers du numérique en fin d'année
                                2020
                                et
                                développe mon apprentissage au fil des mois avec passion et rigueur.
                            </p>
                        </SAboutTextRight>
                    </SAboutTextContainer>
                </SAboutSectionPresentation>
            </SAboutSectionPresentationContainer>
            <SAboutSectionCV>

            </SAboutSectionCV>
        </SAboutContainer>

    );
}

export default About;