import React from "react";
import {SHeaderContainer} from "./Home.styled";
import BannerAnimation from "../BannerAnimation/BannerAnimation";
import {useIntl} from "react-intl";

const Home = () => {
    const intl = useIntl();
    return (
        <>
            <SHeaderContainer>
                <BannerAnimation/>
            </SHeaderContainer>
            <div>
                <h1>{intl.formatMessage({id: "home.welcome_message"})}</h1>
                <p>Exploratrice de l'imaginaire et artiste en herbe connectée, j'ai toujours été attirée par la création
                    et des possibilités incroyables qu'elle nous offre
                    - <span> l'art est partout et nous sommes l'art !</span>
                </p>
                <p>Quand nous regardons autour de nous, nous voyons, écoutons et ressentons le monde comme une œuvre
                    d'art. Chaque jour, celui-ci est exprimé par des idées nouvelles dans différents langages : arts
                    plastiques, chant, musique, théâtre, cinéma, danse, animation, etc.</p>
                <p>Curieuse, j'aime donner vie aux idées de mon imaginaire, à travers différents matériaux : de la mine
                    de graphite aux poils du pinceau, du support traditionnel à l'écran du digital, de l'instantané de
                    la photo au clap de la vidéo, des mots de l'écriture à l'illustration de la BD.</p>
                <p>Aujourd'hui, je me reconvertie dans l'univers du numérique en tant que Développeuse Informatique. En
                    effet, passionnée par l'innovation et les technologies, je souhaite mettre mes compétences créatives
                    et mon savoir-faire technique au service des utilisateurs et des entreprises !</p>
                <p>Veuillez retrouver mes créations personnelles et mes créations réalisées dans le cadre
                    de ma formation au Campus Numérique in the ALPS de Chambéry, dans mon portfolio !</p>
                <a href="htmls/portfolio.html"><h1>Portfolio</h1></a>
            </div>
        </>
    );
}

export default Home;