import {SSkillsCodeWrapper, SSkillsContainer, SSkillsDrawWrapper, SSkillsList, SSkillsWrapper} from "./Skills.styled";
import {useIntl} from "react-intl";
import code from "../../style/assets/img/code.png";
import draw from "../../style/assets/img/draw.png"

const Skills = () => {
    const intl = useIntl();

    return (
        <SSkillsContainer>
            <SSkillsCodeWrapper>
                <img src={code} alt="code"/>
                {/*en attendant version dessin animée avec ordi et code*/}
                {/*<h2>{intl.formatMessage({id: 'skill_title_developer'})}</h2>*/}
                <p>{intl.formatMessage({id: 'skill_subtitle_developer'})}</p>

                <p>{intl.formatMessage({id: 'skill_title_list_developer'})}</p>
                <SSkillsList>
                    <li>{intl.formatMessage({id: 'skill_title_html_css_developer'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_react_developer'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_typescript_developer'})}</li>
                    <li>{intl.formatMessage({id: 'skill_title_Github_developer'})}</li>
                    <li>GitLab</li>
                    <li>etc</li>
                </SSkillsList>
            </SSkillsCodeWrapper>

            <SSkillsDrawWrapper>
                <img src={draw} alt="pen & pencil"/>
                {/*en attendant version dessin animée avec crayons et tablette graph*/}
                {/*<h2>{intl.formatMessage({id: 'skill_title_imaginary'})}</h2>*/}
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
            </SSkillsDrawWrapper>
        </SSkillsContainer>
    )

}

export default Skills;