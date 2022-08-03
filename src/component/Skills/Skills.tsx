import {SSkillsContainer, SSkillsList, SSkillsWrapper} from "./Skills.styled";
import {useIntl} from "react-intl";

const Skills = () => {
    const intl = useIntl();

    return (
        <SSkillsContainer>
            <SSkillsWrapper>
                <h2>{intl.formatMessage({id: 'skill_title_imaginary'})}</h2>
                <p>{intl.formatMessage({id: 'skill_subtitle_imaginary'})}</p>

                <p>{intl.formatMessage({id: 'skill_title_list_imaginary'})}</p>
                <SSkillsList>
                    <li>{intl.formatMessage({id: 'skill_title_list_pen_paper_imaginary'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_list_stylet_tablette_imaginary'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_list_figma_imaginary'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_list_gimp_imaginary'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_list_blender_imaginary'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_list_photoshop_imaginary'})}</li>
                </SSkillsList>

            </SSkillsWrapper>

            <SSkillsWrapper>
                <h2>{intl.formatMessage({id: 'skill_title_developer'})}</h2>
                <p>{intl.formatMessage({id: 'skill_subtitle_developer'})}</p>

                <p>{intl.formatMessage({id: 'skill_title_list_developer'})}</p>
                <SSkillsList>
                    <li>{intl.formatMessage({id: 'skill_title_html_css_developer'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_react_developer'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_typescript_developer'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_Github_developer'})}</li>
                    <li></li>
                </SSkillsList>

            </SSkillsWrapper>
        </SSkillsContainer>
    )

}

export default Skills;