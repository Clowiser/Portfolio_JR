import {
    SSkillsWrapper,
    SSkillsContainer,
    SSkillsList, SSkillsTitle, SSkillsLogoImg, SSkillsLogoWrapper,
} from "./Skills.styled";
import {useIntl} from "react-intl";
import React from "react";
import react from "../../style/assets/img/logo/technos/react_logo.png"
import graphql from "../../style/assets/img/logo/technos/graphql_logo.png"
import html from "../../style/assets/img/logo/technos/html_logo.png"
import css from "../../style/assets/img/logo/technos/css_logo.png"
import apollo from "../../style/assets/img/logo/technos/appolo_logo.png"
import javascript from "../../style/assets/img/logo/technos/javascript_logo.png"
import typescript from "../../style/assets/img/logo/technos/typescript_logo.png"
import mysql from "../../style/assets/img/logo/technos/mysql_logo.png"
import github from "../../style/assets/img/logo/technos/github_logo.png"
import gitlab from "../../style/assets/img/logo/technos/gitlab_logo.png"
import jest from "../../style/assets/img/logo/technos/jest_logo.png"
import pen from "../../style/assets/img/logo/draws/pen_logo.png"
import figma from "../../style/assets/img/logo/draws/figma_logo.png"
import gimp from "../../style/assets/img/logo/draws/gimp_logo.png"
import blender from "../../style/assets/img/logo/draws/blender_logo.png"
import krita from "../../style/assets/img/logo/draws/krita_logo.png"
import palette from "../../style/assets/img/logo/draws/palette_logo.png"
import photoshop from "../../style/assets/img/logo/draws/photoshop_logo.png"
import painttoosai from "../../style/assets/img/logo/draws/paintTooSai_logo.png"

import {ESkillsDeveloper, ESkillsImaginary} from "./Skills.types";

const Skills = () => {
    const intl = useIntl();

    const logoTechnosSkills = [html, css, react, javascript, typescript, graphql, apollo, mysql, github, gitlab, jest];
    const logoDrawsSkills = [pen, palette, figma, gimp, krita, painttoosai, photoshop, blender];

    return (
        <SSkillsContainer>
            <SSkillsLogoWrapper>
                {logoTechnosSkills.map((logo) => <SSkillsLogoImg key={logo.id} src={logo} alt="logo"/>)}
            </SSkillsLogoWrapper>
            <SSkillsWrapper>
                <SSkillsTitle>{intl.formatMessage({id: 'skill_subtitle_developer'})}</SSkillsTitle>
                <p>Mes principaux outils :</p>
                <SSkillsList>
                    {Object.entries(ESkillsDeveloper).map((entry) => (
                        <li>{intl.formatMessage({id: `skill_title_${entry[1]}_developer`})}</li>))}
                </SSkillsList>
            </SSkillsWrapper>

            <SSkillsWrapper>
                <SSkillsTitle>{intl.formatMessage({id: 'skill_subtitle_imaginary'})}</SSkillsTitle>
                <p>Mes principaux outils :</p>
                <SSkillsList>
                    {Object.entries(ESkillsImaginary).map((entry) => (
                        <li>{intl.formatMessage({id: `skill_title_${entry[1]}_imaginary`})}</li>))}
                </SSkillsList>
            </SSkillsWrapper>
            <SSkillsLogoWrapper>
                {logoDrawsSkills.map((draw) =>
                    <SSkillsLogoImg key={draw.id} src={draw} alt="Logo"/>
                )}
            </SSkillsLogoWrapper>
        </SSkillsContainer>
    )
}

export default Skills;