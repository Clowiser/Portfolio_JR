import React, {useEffect, useState} from "react";
import axios from "axios";
import {useIntl} from "react-intl";
import {SElementContainer, SElementImage, SElementText, SPortfolioWrapper} from "../PortfolioIndex.styled";
import PortfolioDetailModal from "../WebWork/PortfolioWebWorkDetailModal";
import useModal from "../../utils/Hooks/useModal";
import {SModal} from "../../utils/Modal/Modal.styled";

const PortfolioGraphicDigitalWork = () => {
    const intl = useIntl();
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const {openModal, closeModal, modal, setModal} = useModal({StyleModal: SModal});

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
        return <p>{intl.formatMessage({id: 'loading_api_loading'})}</p>
    }

    return (
        <SPortfolioWrapper>
            {data.map((element) => {
                return (
                    <div key={element.id}>
                        <SElementContainer>
                            <SElementImage src={element.img_complete} alt={"img" + element.id} onClick={(): void => {
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
    )

}

export default PortfolioGraphicDigitalWork;