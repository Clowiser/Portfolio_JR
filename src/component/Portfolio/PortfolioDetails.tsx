import {useParams} from "react-router-dom";
import {
    SElementContainer,
    SElementImage,
    SPortfolioDetailsLink,
    SShareLogo,
    SShareLogoContainer
} from "./Portfolio.styled";
import logo_Github from "../../style/assets/img/logo/github_logo.png";
import logo_Netlify from "../../style/assets/img/logo/netlify_logo.png";
import logo_Figma from "../../style/assets/img/logo/figma_logo.png";
import React from "react";

interface IPortfolioDetails {
    element: any;
}

const PortfolioDetails = (props: IPortfolioDetails) => {
    const {element} = props;
    const {id} = useParams();


    return (
        <>
            <div key={element.id}>
                <SElementContainer>
                    <SPortfolioDetailsLink to={`/portfolio/${element.id}`}>
                        <SElementImage src={element.image} alt={"img" + element.id}/>
                    </SPortfolioDetailsLink>
                    <p>{element.title}</p>
                    <p>{element.subtitle}</p>
                    <p>{element.description}</p>
                    <SShareLogoContainer>
                        {element.github_boolean === "true" ? <SShareLogo src={logo_Github}/> : null}
                        {element.netifly_boolean === "true" ? <SShareLogo src={logo_Netlify}/> : null}
                        {element.figma_boolean === "true" ? <SShareLogo src={logo_Figma}/> : null}
                    </SShareLogoContainer>
                </SElementContainer>
            </div>
        </>
    )

}

export default PortfolioDetails;