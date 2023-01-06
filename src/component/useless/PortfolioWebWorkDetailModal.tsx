import {
    SElementDetailWrapper,
    SElementImageDetail,
    SPortfolioDetailContainer,
    SShareLogo,
    SShareLogoContainer, SElementDetailInfos
} from "../Portfolio/PortfolioIndex.styled";
import logo_Github from "../../style/assets/img/logo/technos/github_logo.png";
import logo_Netlify from "../../style/assets/img/logo/technos/netlify_logo.png";
import logo_Figma from "../../style/assets/img/logo/draws/figma_logo.png";

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
                </SElementDetailWrapper>
            </div>
            <div onClick={(): void => {
                closeModal()
            }}/>
        </SPortfolioDetailContainer>)
}

export default PortfolioDetail;