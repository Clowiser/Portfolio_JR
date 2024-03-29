import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useIntl} from "react-intl";
import PortfolioDetail from "../../Detail/PortfolioDetail";
import {SErrorMessage, SMessagesContainer} from "../../../../style/Style.styled";
import Loader from "../../../../Component/Loader/Loader";
import Error from "../../../../Component/Error/Error";

const PortfolioDetailData = () => {
    const intl = useIntl();
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchArticle = () => {
            setLoading(true)
            axios.get(`http://localhost:3000/api/portfolio_graphic_digital_creations/${id}`)
                .then(res => {
                    setData(res.data)
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                })
        };

        fetchArticle();
    }, [id]);

    if (error) {
        return (
            <SMessagesContainer>
                <SErrorMessage>{intl.formatMessage({id: 'loading_api_error'})}</SErrorMessage>
                <Error/>
            </SMessagesContainer>)
    }
    if (loading) {
        return (
            <SMessagesContainer>
                <Loader/>
            </SMessagesContainer>)
    }

    return (
        <>
            {data && <PortfolioDetail data={data} id={id}/>}
        </>
    )
}

export default PortfolioDetailData;