import {
    SImgCode, SImgDraw,
    SSkillsCodeText,
    SSkillsContainer,
    SSkillsDrawText,
    SSkillsList,
    SSkillsWrapper
} from "./Skills.styled";
import {useIntl} from "react-intl";
import left from "../../style/assets/img/img/left.png"
import right from "../../style/assets/img/img/right.png"
import {SPortfolioHashLink} from "../Portfolio/PortfolioIndex.styled";
import React from "react";

const Skills = () => {
    const intl = useIntl();

    return (
        <SSkillsContainer>

            <SImgCode src={left} alt="Personnage JR développeuse"/>
            <SSkillsCodeText>
                {/*<h2>{intl.formatMessage({id: 'skill_title_developer'})}</h2>*/}
                <p>{intl.formatMessage({id: 'skill_subtitle_developer'})}</p>
                {/*<p>{intl.formatMessage({id: 'skill_title_list_developer'})}</p>*/}
                <p>Mes appétences dans le développement</p>
                <SSkillsList style={{marginBottom: "5rem"}}>
                    <li>{intl.formatMessage({id: 'skill_title_html_css_developer'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_react_developer'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_typescript_developer'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_Github_developer'})}</li>
                    <li>GitLab</li>
                    <li>{intl.formatMessage({id: 'skill_title_html_css_developer'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_react_developer'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_typescript_developer'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_Github_developer'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_Github_developer'})}</li>
                    <li>GitLab</li>
                    <li>etc</li>
                </SSkillsList>
                <SPortfolioHashLink smooth
                                    to={`/portfolio#web`}>Réalisations</SPortfolioHashLink>
            </SSkillsCodeText>

            <SSkillsDrawText>
                {/*<h2>{intl.formatMessage({id: 'skill_title_imaginary'})}</h2>*/}
                <p>{intl.formatMessage({id: 'skill_subtitle_imaginary'})}</p>
                {/*<p>{intl.formatMessage({id: 'skill_title_list_imaginary'})}</p>*/}
                <p>Mes appétences dans le graphisme</p>
                <SSkillsList style={{marginBottom: "5rem"}}>
                    <li>{intl.formatMessage({id: 'skill_title_list_pen_paper_imaginary'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_list_stylet_tablette_imaginary'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_list_figma_imaginary'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_list_gimp_imaginary'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_list_blender_imaginary'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_list_photoshop_imaginary'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_list_pen_paper_imaginary'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_list_stylet_tablette_imaginary'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_list_figma_imaginary'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_list_gimp_imaginary'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_list_blender_imaginary'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_list_photoshop_imaginary'})}</li>
                </SSkillsList>
                <SPortfolioHashLink smooth
                                    to={`/portfolio#graphics`}>Réalisations</SPortfolioHashLink>
            </SSkillsDrawText>
            <SImgDraw src={right} alt="Personnage JR dessinant"/>

        </SSkillsContainer>
    )
}

export default Skills;