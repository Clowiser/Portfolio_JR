import {
    SElementDetailWrapper, SElementDetailImageInfos,
    SElementImageDetail,
    SPortfolioDetailContainer,
    SShareLogo,
    SShareLogoContainer, SElementDetailInfos
} from "../Portfolio/Portfolio.styled";
import logo_Github from "../../style/assets/img/logo/github_logo.png";
import logo_Netlify from "../../style/assets/img/logo/netlify_logo.png";
import logo_Figma from "../../style/assets/img/logo/figma_logo.png";
import useModal from "../utils/Hooks/useModal";
import {SModal} from "../utils/Modal/Modal.styled";

import PortfolioDetailModal from "../Portfolio/WebWork/PortfolioWebWorkDetailModal";

interface IPortfolioDetail {
    data: any;
}

const PortfolioDetail = (props: IPortfolioDetail) => {
    const {data} = props;
    const {openModal, closeModal, modal, setModal} = useModal({StyleModal: SModal});

    return (
        <SPortfolioDetailContainer>
            <div key={data[0].id}>
                <SElementDetailWrapper>
                    {/*<button onClick={(): void => {*/}
                    {/*    setModal(*/}
                    {/*        <TestModal closeModal={closeModal}/>*/}
                    {/*    )*/}
                    {/*    openModal();*/}
                    {/*}}>*/}
                    {/*    Test*/}
                    {/*</button>*/}
                    {/*{modal}*/}
                    <SElementDetailImageInfos>
                        <SElementImageDetail src={data[0].image} alt={"img" + data[0].id}/>
                        <SElementDetailInfos>
                            <p>{data[0].title}</p>
                            <p>{data[0].subtitle}</p>
                            <p>{data[0].description}</p>
                            <SShareLogoContainer>
                                {data[0].github_boolean === "true" ? <SShareLogo src={logo_Github}/> : null}
                                {data[0].netifly_boolean === "true" ? <SShareLogo src={logo_Netlify}/> : null}
                                {data[0].figma_boolean === "true" ? <SShareLogo src={logo_Figma}/> : null}
                            </SShareLogoContainer>
                        </SElementDetailInfos>
                    </SElementDetailImageInfos>

                </SElementDetailWrapper>
            </div>
        </SPortfolioDetailContainer>)

}

export default PortfolioDetail;