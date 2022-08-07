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
import useModal from "../utils/Hooks/useModal";
import {SModal} from "../utils/Modal/Modal.styled";
import TestModal from "../ unguarded/TestModal";
import PortfolioDetailModal from "./PortfolioDetailModal";


const Portfolio = () => {
    const intl = useIntl();
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const {openModal, closeModal, modal, setModal} = useModal({StyleModal: SModal});


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
                                {/*<SPortfolioDetailsLink to={`/portfolio/${element.id}`}>*/}
                                {/*    <SElementImage src={element.image} alt={"img" + element.id}/>*/}
                                {/*</SPortfolioDetailsLink>*/}
                                <SElementImage src={element.image} alt={"img" + element.id} onClick={(): void => {
                                    setModal(
                                        <PortfolioDetailModal element={element} closeModal={closeModal}/>
                                    )
                                    openModal();
                                }}/>
                                {modal}
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