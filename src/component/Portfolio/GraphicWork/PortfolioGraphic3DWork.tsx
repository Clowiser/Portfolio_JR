import {useIntl} from "react-intl";
import React, {useEffect, useState} from "react";
import useModal from "../../utils/Hooks/useModal";
import {SModal} from "../../utils/Modal/Modal.styled";
import axios from "axios";
import {
    SElementContainer,
    SElementImage,
    SElementText,
    SPortfolioDetailsLink,
    SPortfolioWrapper
} from "../PortfolioIndex.styled";
import PortfolioDetailModal from "../WebWork/PortfolioWebWorkDetailModal";

const PortfolioGraphic3DWork = () => {
    const intl = useIntl();
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const {openModal, closeModal, modal, setModal} = useModal({StyleModal: SModal});

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
                            <SPortfolioDetailsLink to={`/portfolio/${element.id}`}>
                                <SElementImage src={element.image} alt={"img" + element.id}/>
                            </SPortfolioDetailsLink>
                            {/*<SElementImage src={element.image} alt={"img" + element.id} onClick={(): void => {*/}
                            {/*    setModal(*/}
                            {/*        <PortfolioDetailModal element={element} closeModal={closeModal}/>*/}
                            {/*    )*/}
                            {/*    openModal();*/}
                            {/*}}/>*/}
                            {/*{modal}*/}
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