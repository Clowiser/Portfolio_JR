import React from "react";
import {
    SCurriculumContainer,
    SFormationsWrapper,
    SFormationsSections,
    SImgCode,
    SFormationsContainer, SWebSkillsContainer
} from "./Curriculum.styled";
import left from "../../../style/assets/img/img/left.png";

const Curriculum = (): JSX.Element => {

    return (
        <SCurriculumContainer>
            <SFormationsContainer>
                <SFormationsWrapper>
                    <SFormationsSections>
                        <h3>Développement Web :</h3>
                        <SImgCode src={left} alt="Personnage JR développeuse"/>
                    </SFormationsSections>
                    <SFormationsSections>
                        <h3>Arts & Créations :</h3>
                        <SImgCode src={left} alt="Personnage JR développeuse"/>
                    </SFormationsSections>
                    <SFormationsSections>
                        <h3>Hôtellerie-Restauration :</h3>
                        <SImgCode src={left} alt="Personnage JR développeuse"/>
                    </SFormationsSections>
                </SFormationsWrapper>
            </SFormationsContainer>

            <SWebSkillsContainer>
                <h2>Mes Centres d'intérêts</h2>
                <p>Mettre logo + barre d'évolution</p>
            </SWebSkillsContainer>

        </SCurriculumContainer>
    )

}

export default Curriculum;