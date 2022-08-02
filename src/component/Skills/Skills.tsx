import {SSkillsContainer, SSkillsList, SSkillsWrapper} from "./Skills.styled";
import {useIntl} from "react-intl";

const Skills = () => {
    const intl = useIntl();

    return (
        <SSkillsContainer>
            <SSkillsWrapper>
                <h2>{intl.formatMessage({id: 'skill_title_imaginary'})}</h2>
                <p>Armée de mon croquis depuis l'enfance, je me plais à créer et transfert mes appétences dans le milieu
                    digital</p>

                <p>Les pinceaux de la Création</p>
                <SSkillsList>
                    <li>Crayon et papier</li>
                    <li>Stylet et tablette</li>
                    <li>Figma</li>
                    <li>Gimp</li>
                    <li>Blender</li>
                    <li>Photoshop</li>
                </SSkillsList>

            </SSkillsWrapper>

            <SSkillsWrapper>
                <h2>{intl.formatMessage({id: 'skill_title_developer'})}</h2>
                <p>Développant bloc par bloc mes compétences, je m'amuse sérieusement </p>

                <p>Les outils du Développement</p>
                <SSkillsList>
                    <li>HTML/CSS/JS</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Github</li>
                    <li></li>
                </SSkillsList>

            </SSkillsWrapper>
        </SSkillsContainer>
    )

}

export default Skills;