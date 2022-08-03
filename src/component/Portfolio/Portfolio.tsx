import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    SElementContainer,
    SElementImage, SElementText, SElementWrapper,
    SPortfolioContainer, SPortfolioTitle,
    SPortfolioWrapper,
    SShareLogo,
    SShareLogoContainer
} from "./Portfolio.styled";
import logo_Github from "../../style/assets/img/logo/github_logo.png";
import logo_Netlify from "../../style/assets/img/logo/netlify_logo.png";
import logo_Figma from "../../style/assets/img/logo/figma_logo.png";
import {useIntl} from "react-intl";
import PortfolioDetails from "./PortfolioDetails";

const Portfolio = () => {
    const intl = useIntl();
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:3000/api/portfolio_realisations')
            .then(res => {
                setData(res.data)
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                console.log(error)
            })
    }, []);

    if (error) {
        return <p>{intl.formatMessage({id: 'loading_api_error'})}</p>
    }
    if (loading) {
        return <p>{intl.formatMessage({id: 'loading_api_loading'})}</p>
    }


    return (
        <SPortfolioContainer>
            <SPortfolioTitle>{intl.formatMessage({id: 'portfolio_first_title'})}</SPortfolioTitle>
            <p style={{textAlign: "center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod</p>
            <SPortfolioWrapper>
                {data.map((element) => {
                    return (
                        <div key={element.id}>
                            <SElementContainer>
                                <SElementImage src={element.image} alt={"img" + element.id}/>
                                <SElementText>
                                    <p>{element.title}</p>
                                </SElementText>
                                {/*<SShareLogoContainer>*/}
                                {/*    {element.github_boolean === "true" ? <SShareLogo src={logo_Github}/> : null}*/}
                                {/*    {element.netifly_boolean === "true" ? <SShareLogo src={logo_Netlify}/> : null}*/}
                                {/*    {element.figma_boolean === "true" ? <SShareLogo src={logo_Figma}/> : null}*/}
                                {/*</SShareLogoContainer>*/}
                            </SElementContainer>
                        </div>
                    )
                })}
            </SPortfolioWrapper>
        </SPortfolioContainer>
    );
}

export default Portfolio;