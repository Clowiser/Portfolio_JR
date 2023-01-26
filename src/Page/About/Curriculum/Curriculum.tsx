import React from "react";
import {
    SCurriculumContainer,
    SFormationsWrapper,
    SFormationsSections,
    SImgCode,
    SFormationsContainer, SWebSkillsContainer
} from "./Curriculum.styled";
import left from "../../../style/assets/img/img/left.png";
import ReactTooltip from "react-tooltip";
import useModal from "../../utils/Hooks/useModal";
import {SModal} from "../../utils/Modal/Modal.styled";
import Modal from "../../Home/Modal/Modal";
import CurriculumModal from "./Modal/CurriculumModal";
import {useIntl} from "react-intl";

const Curriculum = (): JSX.Element => {
    const intl = useIntl();
    const {openModal, closeModal, modal, setModal} = useModal({StyleModal: SModal});

    return (
        <SCurriculumContainer>
            <SFormationsContainer>
                <SFormationsWrapper>
                    <SFormationsSections>
                        <h3>{intl.formatMessage({id: "curriculum_title_web"})}</h3>
                        <SImgCode src={left} alt="Personnage JR développeuse" onClick={() => {
                            setModal(<CurriculumModal closeModal={closeModal}/>)
                            openModal();
                        }}/>
                    </SFormationsSections>

                    <SFormationsSections>
                        <h3>{intl.formatMessage({id: "curriculum_title_arts"})}</h3>
                        <SImgCode src={left} alt="Personnage JR développeuse" onClick={() => {
                            setModal(<CurriculumModal closeModal={closeModal}/>)
                            openModal();
                        }}/>
                    </SFormationsSections>

                    <SFormationsSections>
                        <h3>{intl.formatMessage({id: "curriculum_title_hostellerie"})}</h3>
                        <SImgCode src={left} alt="Personnage JR développeuse" onClick={() => {
                            setModal(<CurriculumModal closeModal={closeModal}/>)
                            openModal();
                        }}/>
                    </SFormationsSections>
                </SFormationsWrapper>
                {modal}
            </SFormationsContainer>

            <SWebSkillsContainer>
                <h2>Mes Centres d'intérêts</h2>
                <p>Mettre logo</p>
            </SWebSkillsContainer>

        </SCurriculumContainer>
    )
}

export default Curriculum;