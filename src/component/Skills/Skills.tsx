import {
    SImg,
    SSkillsWrapper,
    SSkillsContainer,
    SSkillsList, SSkillsTitle,
} from "./Skills.styled";
import {useIntl} from "react-intl";
import left from "../../style/assets/img/img/left.png"
import right from "../../style/assets/img/img/right.png"
import {SPortfolioHashLink} from "../Portfolio/PortfolioIndex.styled";
import React from "react";

enum ESSkillsDeveloper {
    html_css = "html_css",
    javascript = "javascript",
    react = "react",
    typescript = "typescript",
    github = "github",
    gitlab = "gitlab",
    apollo = "apollo",
    graphql = "graphql",
    sql = "sql",
    jest = "jest",
}

enum ESkillsImaginary {
    pen_paper = "pen_paper",
    stylet_tablet = "stylet_tablet",
    figma = "figma",
    gimp = "gimp",
    blender = "blender",
    photoshop = "photoshop",
    krita = "krita",
    paintTooSai = "paintTooSai",
    animation = "animation",
}

const Skills = () => {
    const intl = useIntl();

    return (
        <SSkillsContainer>
            <SImg src={left} alt="Personnage JR développeuse"/>
            <SSkillsWrapper>
                <SSkillsTitle>{intl.formatMessage({id: 'skill_subtitle_developer'})}</SSkillsTitle>
                <SSkillsList style={{marginBottom: "5rem"}}>
                    {Object.entries(ESSkillsDeveloper).map((entry) => (
                        <li>{intl.formatMessage({id: `skill_title_${entry[1]}_developer`})}</li>))}
                </SSkillsList>
                <SPortfolioHashLink smooth
                                    to={`/portfolio#web`}>Réalisations</SPortfolioHashLink>
            </SSkillsWrapper>

            <SSkillsWrapper>
                <SSkillsTitle>{intl.formatMessage({id: 'skill_subtitle_imaginary'})}</SSkillsTitle>
                <SSkillsList style={{marginBottom: "5rem"}}>
                    {Object.entries(ESkillsImaginary).map((entry) => (
                        <li>{intl.formatMessage({id: `skill_title_${entry[1]}_imaginary`})}</li>))}
                </SSkillsList>
                <SPortfolioHashLink smooth
                                    to={`/portfolio#graphics`}>Réalisations</SPortfolioHashLink>
            </SSkillsWrapper>
            <SImg src={right} alt="Personnage JR dessinant"/>
        </SSkillsContainer>
    )
}

export default Skills;