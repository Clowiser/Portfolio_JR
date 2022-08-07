import {
    SElementDetailWrapper, SElementDetailImageInfos,
    SElementImageDetail,
    SPortfolioDetailContainer,
    SShareLogo,
    SShareLogoContainer, SElementDetailInfos
} from "./Portfolio.styled";
import logo_Github from "../../style/assets/img/logo/github_logo.png";
import logo_Netlify from "../../style/assets/img/logo/netlify_logo.png";
import logo_Figma from "../../style/assets/img/logo/figma_logo.png";
import useModal from "../utils/Hooks/useModal";
import {SModal} from "../utils/Modal/Modal.styled";
import TestModal from "../ unguarded/TestModal";
import {log} from "util";

interface IPortfolioDetailModal {
    closeModal: () => void;
    element: any;
}

const PortfolioDetail = (props: IPortfolioDetailModal) => {
    const {closeModal, element} = props;

    return (
        <SPortfolioDetailContainer>
            <div key={element.id}>
                <SElementDetailWrapper>
                    <SElementDetailImageInfos>
                        <SElementImageDetail src={element.image} alt={"img" + element.id}/>
                        <SElementDetailInfos>
                            <p>{element.title}</p>
                            <p>{element.subtitle}</p>
                            <p>{element.description}</p>
                            <SShareLogoContainer>
                                {element.github_boolean === "true" ? <SShareLogo src={logo_Github}/> : null}
                                {element.netifly_boolean === "true" ? <SShareLogo src={logo_Netlify}/> : null}
                                {element.figma_boolean === "true" ? <SShareLogo src={logo_Figma}/> : null}
                            </SShareLogoContainer>
                        </SElementDetailInfos>
                    </SElementDetailImageInfos>
                </SElementDetailWrapper>
            </div>
            <div onClick={(): void => {
                closeModal()
            }}/>
        </SPortfolioDetailContainer>)
}

export default PortfolioDetail;