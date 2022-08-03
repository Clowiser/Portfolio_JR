import React, {useEffect, useState} from "react";
import axios from "axios";
import {SCircleImg, SListUnique, SRealisationList, SRealisationWrapper} from "../Home/Realisations/Realisation.styled";
import {
    SElementContainer,
    SElementImage,
    SPortfolioContainer,
    SPortfolioWrapper,
    SShareLogo,
    SShareLogoContainer
} from "./Portfolio.styled";
import {SNetworkLogo} from "../Footer/Footer.styled";
import logo_Github from "../../style/assets/img/logo/github_logo.png";
import logo_Netlify from "../../style/assets/img/logo/netlify_logo.png";

const Portfolio = () => {
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:3000/api/portfolio_realisations')
            .then(res => {
                setData(res.data)
                setLoading(false);
                console.log(res.data);
            })
            .catch(error => {
                setError(error);
                console.log(error)
            })
    }, []);

    return (
        <SPortfolioContainer>
            <SPortfolioWrapper>
                {data.map((element) => {
                    return (
                        <div key={element.id}>
                            <div>
                                <SElementContainer>
                                    <SElementImage src={element.image} alt={"img" + element.id}/>
                                    <p>{element.title}</p>
                                    <p>{element.subtitle}</p>
                                    <p>{element.description}</p>
                                    <SShareLogoContainer>
                                        {element.github_boolean === "true" ? <SShareLogo src={logo_Github}/> : null}
                                        {element.netifly_boolean === "true" ? <SShareLogo src={logo_Netlify}/> : null}
                                    </SShareLogoContainer>
                                </SElementContainer>

                            </div>
                        </div>
                    )
                })}
            </SPortfolioWrapper>
        </SPortfolioContainer>
    );
}

export default Portfolio;