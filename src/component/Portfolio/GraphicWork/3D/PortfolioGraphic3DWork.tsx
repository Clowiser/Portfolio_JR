import {useIntl} from "react-intl";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    SElementContainer,
    SElementImage,
    SElementText,
    SPortfolioDetailsLink,
    SPortfolioWrapper
} from "../../PortfolioIndex.styled";

const PortfolioGraphic3DWork = () => {
    const intl = useIntl();
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:3000/api/portfolio_graphic_3d')
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
                            <SPortfolioDetailsLink to={`/portfolio/3D/${element.id}`}>
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
    )
}

export default PortfolioGraphic3DWork;