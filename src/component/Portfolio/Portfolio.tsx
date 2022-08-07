import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    SElementContainer,
    SElementImage, SElementText,
    SPortfolioContainer, SPortfolioDetailsLink,
    SPortfolioTitle,
    SPortfolioWrapper,
} from "./Portfolio.styled";
import {Link} from "react-router-dom";
import {useIntl} from "react-intl";


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
                                <SPortfolioDetailsLink to={`/portfolio/${element.id}`}>
                                    <SElementImage src={element.image} alt={"img" + element.id}/>
                                </SPortfolioDetailsLink>
                                <SElementText>
                                    <p>{element.title}</p>
                                </SElementText>
                            </SElementContainer>
                        </div>
                    )
                })}
            </SPortfolioWrapper>
        </SPortfolioContainer>
    );
}

export default Portfolio;