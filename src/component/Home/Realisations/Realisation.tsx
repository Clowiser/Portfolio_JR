import {
    SCircleImg, SListUnique,
    SRealisationElementContainer,
    SRealisationContainer,
    SRealisationElementList,
    SRealisationTitle,
    SRealisationElementWrapper, SCircleImgWrapper
} from "./Realisation.styled";
import {useIntl} from "react-intl";
import React, {useEffect, useState} from "react";
import axios from "axios";
import useModal from "../../utils/Hooks/useModal";
import {SModal} from "../../utils/Modal/Modal.styled";
import RealisationModal from "../Modal/RealisationModal";

const Realisation = () => {
    const intl = useIntl();
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const {openModal, closeModal, modal, setModal} = useModal({StyleModal: SModal});

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:3000/api/realisation_home')
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
        <SRealisationContainer>
            <SRealisationTitle>{intl.formatMessage({id: 'realisation_title'})}</SRealisationTitle>

            <SRealisationElementContainer>
                {data.map((element) => {
                    return (
                        <SRealisationElementWrapper key={element.id}>
                            <SRealisationElementList>

                                <SCircleImgWrapper>
                                    <SCircleImg src={element.image} alt="img" onClick={() => {
                                        setModal(<RealisationModal closeModal={closeModal} element={element}/>)
                                        openModal();
                                    }}/>
                                    {modal}
                                </SCircleImgWrapper>
                                
                                <SListUnique>
                                    <p>{element.title}</p>
                                </SListUnique>
                            </SRealisationElementList>
                        </SRealisationElementWrapper>
                    )
                })}
            </SRealisationElementContainer>
        </SRealisationContainer>
    )
}

export default Realisation;