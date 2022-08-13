import {
    SPortfolioContainer,
    SPortfolioContainerLink, SPortfolioHashLink,
    SPortfolioTitle,
    SPortfolioWrapperLink
} from "./Portfolio.styled";
import React from "react";
import {useIntl} from "react-intl";
import PortfolioWebWork from "./WebWork/PortfolioWebWork";
import PortfolioGraphicDigitalWork from "./GraphicWork/PortfolioGraphicDigitalWork";
import PortfolioGraphic3DWork from "./GraphicWork/PortfolioGraphic3DWork";
// @ts-ignore
import {HashLink} from 'react-router-hash-link';


const PortfolioIndex = (): JSX.Element => {
    const intl = useIntl()

    return (
        <SPortfolioContainer>
            <SPortfolioContainerLink>
                <SPortfolioWrapperLink>
                    <SPortfolioHashLink smooth
                                        to={`/portfolio#web`}>{intl.formatMessage({id: 'portfolio_web_work_title'})}</SPortfolioHashLink>
                    <SPortfolioHashLink smooth
                                        to={`/portfolio#graphics`}>{intl.formatMessage({id: 'portfolio_graphic_work_title'})}</SPortfolioHashLink>
                </SPortfolioWrapperLink>
            </SPortfolioContainerLink>
            <SPortfolioTitle id="web">{intl.formatMessage({id: 'portfolio_web_work_title'})}</SPortfolioTitle>
            <p style={{textAlign: "center"}}>{intl.formatMessage({id: 'portfolio_web_work_subtitle'})}</p>
            <PortfolioWebWork/>
            <SPortfolioTitle id="graphics">{intl.formatMessage({id: 'portfolio_graphic_work_title'})}</SPortfolioTitle>
            <h3 style={{textAlign: "center"}}>{intl.formatMessage({id: 'portfolio_graphic_illustrations_work_title'})}</h3>
            <PortfolioGraphicDigitalWork/>
            <h3 style={{textAlign: "center"}}>{intl.formatMessage({id: 'portfolio_graphic_3D_work_title'})}</h3>
            <PortfolioGraphic3DWork/>
            {/*<h3 style={{textAlign: "center"}}>{intl.formatMessage({id: 'portfolio_graphic_literary_work_title'})}</h3>*/}
        </SPortfolioContainer>
    )
}

export default PortfolioIndex;