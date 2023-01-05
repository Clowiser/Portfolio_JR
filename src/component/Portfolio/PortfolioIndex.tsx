import {
    SPortfolioContainer,
    SPortfolioWrapperLink,
    SPortfolioTitle,
    SImgCode, SImgDraw, SPortfolioHashLink, SPortfolioSection
} from "./PortfolioIndex.styled";
import React from "react";
import {useIntl} from "react-intl";
import PortfolioWebWork from "./WebWork/PortfolioWebWork";
import PortfolioGraphicDigitalWork from "./GraphicWork/Digital/PortfolioGraphicDigitalWork";
import PortfolioGraphic3DWork from "./GraphicWork/3D/PortfolioGraphic3DWork";
// @ts-ignore
import {HashLink} from 'react-router-hash-link';
import left from "../../style/assets/img/img/Bannerleft.png";
import right from "../../style/assets/img/img/BannerRight.png";


const PortfolioIndex = (): JSX.Element => {
    const intl = useIntl()

    return (
        <SPortfolioContainer>
            <SPortfolioWrapperLink>
                <SPortfolioHashLink smooth
                                    to={`/portfolio#web`}><SImgCode src={left}
                                                                    alt="Personnage JR développeuse"/></SPortfolioHashLink>
                <SPortfolioHashLink smooth
                                    to={`/portfolio#graphics`}><SImgDraw src={right}
                                                                         alt="Personnage JR dessinant"/></SPortfolioHashLink>
            </SPortfolioWrapperLink>

            <SPortfolioSection>
                <SPortfolioTitle id="web">{intl.formatMessage({id: 'portfolio_web_work_title'})}</SPortfolioTitle>
                <p style={{textAlign: "center"}}>{intl.formatMessage({id: 'portfolio_web_work_subtitle'})}</p>
                <PortfolioWebWork/>
            </SPortfolioSection>

            <SPortfolioSection>
                <SPortfolioTitle
                    id="graphics">{intl.formatMessage({id: 'portfolio_graphic_work_title'})}</SPortfolioTitle>
                <h3 style={{textAlign: "center"}}>{intl.formatMessage({id: 'portfolio_graphic_illustrations_work_title'})}</h3>
                <PortfolioGraphicDigitalWork/>
            </SPortfolioSection>

            <SPortfolioSection>
                <h3 style={{textAlign: "center"}}>{intl.formatMessage({id: 'portfolio_graphic_3D_work_title'})}</h3>
                <PortfolioGraphic3DWork/>
            </SPortfolioSection>
        </SPortfolioContainer>
    )
}

export default PortfolioIndex;