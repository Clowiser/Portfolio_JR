import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    SElementContainer,
    SElementImage, SElementText, SPortfolioDetailsLink,
    SPortfolioWrapper, SSoftwareDevIcons, SSoftwareDevIconsContainer,
} from "../PortfolioIndex.styled";
import {useIntl} from "react-intl";


const PortfolioWebWork = (): JSX.Element => {
    const intl = useIntl();
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const url = "http://localhost:3000/api/portfolio_web_realisations/";

    useEffect(() => {
        setLoading(true)
        axios.get(url + '?_sort=section')
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
        <SPortfolioWrapper>
            {data.map((element) => {
                return (
                    <div key={element.id}>
                        <SElementContainer>
                            <SPortfolioDetailsLink to={`/portfolio/WW/${element.id}`}>
                                <SElementImage src={element.image} alt={"img" + element.id}/>
                            </SPortfolioDetailsLink>
                            <SSoftwareDevIconsContainer>
                                <SSoftwareDevIcons src={element.icon_section} alt={"icons software development"}>
                                </SSoftwareDevIcons>
                            </SSoftwareDevIconsContainer>
                            <SElementText>
                                <p>{element.title}</p>
                            </SElementText>
                        </SElementContainer>
                    </div>
                )
            })}
        </SPortfolioWrapper>
    );
}

export default PortfolioWebWork;