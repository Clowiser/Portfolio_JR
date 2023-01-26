import React, {useEffect, useState} from "react";
import axios from "axios";
import {useIntl} from "react-intl";
import {
    SElementContainer,
    SElementImage,
    SElementText,
    SPortfolioDetailsLink,
    SPortfolioWrapper
} from "../../PortfolioIndex.styled";
import {SMessagesContainer} from "../../../../style/Style.styled";
import Loader from "../../../../Component/Loader/Loader";

const PortfolioGraphicDigitalWork = () => {
    const intl = useIntl();
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:3000/api/portfolio_graphic_digital_creations')
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
        return (
            <SMessagesContainer>
                <Loader/>
            </SMessagesContainer>)
    }

    return (
        <SPortfolioWrapper>
            {data.map((element) => {
                return (
                    <div key={element.id}>
                        <SElementContainer>
                            <SPortfolioDetailsLink to={`/portfolio/DG/${element.id}`}>
                                <SElementImage src={element.img_complete} alt={"img" + element.id}/>
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

export default PortfolioGraphicDigitalWork;