import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useIntl} from "react-intl";
import PortfolioDetail from "../Detail/PortfolioDetail";

const PortfolioWWDetailData = () => {
    const intl = useIntl();
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchArticle = () => {
            setLoading(true)
            axios.get(`http://localhost:3000/api/portfolio_web_realisations/${id}`)
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
        return <p>{intl.formatMessage({id: 'loading_api_error'})}</p>
    }
    if (loading) {
        return <p>{intl.formatMessage({id: 'loading_api_loading'})}</p>
    }

    return (
        <>
            {data && <PortfolioDetail data={data} id={id}/>}
        </>
    )
}

export default PortfolioWWDetailData;