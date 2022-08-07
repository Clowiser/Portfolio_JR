import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useIntl} from "react-intl";
import PortfolioDetail from "./PortfolioDetail";

const PortfolioDetailPage = () => {
    const intl = useIntl();

    const {portfolioId} = useParams();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchArticle = () => {
            setLoading(true)
            axios.get(`http://localhost:3000/api/portfolio_realisations/${portfolioId}`)
                .then(res => {
                    setData(res.data)
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                })
        };
        fetchArticle();
    }, [portfolioId]);

    if (error) {
        return <p>{intl.formatMessage({id: 'loading_api_error'})}</p>
    }
    if (loading) {
        return <p>{intl.formatMessage({id: 'loading_api_loading'})}</p>
    }

    return (
        <>
            {data && <PortfolioDetail data={data}/>}
        </>
    )

}

export default PortfolioDetailPage;