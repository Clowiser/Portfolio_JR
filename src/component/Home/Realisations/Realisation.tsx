import {
    SCircleImg, SListUnique,
    SRealContainer,
    SRealisationContainer,
    SRealisationList,
    SRealisationTitle,
    SRealisationWrapper
} from "./Realisation.styled";
import {useIntl} from "react-intl";
import React, {useEffect, useState} from "react";
import axios from "axios";

const Realisation = () => {
    const intl = useIntl();
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:3000/api/realisation_home')
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

    if (error) {
        return <p>{intl.formatMessage({id: 'loading_api_error'})}</p>
    }
    if (loading) {
        return <p>{intl.formatMessage({id: 'loading_api_loading'})}</p>
    }

    return (
        <SRealisationContainer>
            <SRealisationTitle>{intl.formatMessage({id: 'realisation_title'})}</SRealisationTitle>
            <SRealContainer>
                {data.map((element) => {
                    return (
                        <SRealisationWrapper key={element.id}>
                            <SRealisationList>
                                <SCircleImg src={element.img} alt="img"/>
                                <SListUnique>
                                    <p>{element.title}</p>
                                    <p>{element.project}</p>
                                    <p>{element.tools}</p>
                                    <p>{element.demand}</p>
                                </SListUnique>
                            </SRealisationList>
                        </SRealisationWrapper>
                    )
                })}
            </SRealContainer>
        </SRealisationContainer>
    )
}

export default Realisation;