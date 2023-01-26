import {
    SElementDetailWrapper,
    SElementImageDetail,
    SPortfolioDetailContainer, SElementDetailInfos
} from "../../Portfolio/PortfolioIndex.styled";
import React from "react";

interface IRealisationModal {
    closeModal: () => void;
    element: any;
}

const Modal = (props: IRealisationModal) => {
    const {closeModal, element} = props;

    return (
        <SPortfolioDetailContainer>
            <div key={element.id}>
                <SElementDetailWrapper>
                    <SElementImageDetail src={element.image} alt={"img" + element.id}/>
                    <SElementDetailInfos>
                        <p>{element.title}</p>
                        <p>{element.project}</p>
                        <p>{element.tools}</p>
                        <p>{element.demand}</p>
                    </SElementDetailInfos>
                </SElementDetailWrapper>
            </div>
            <div onClick={(): void => {
                closeModal()
            }}/>
        </SPortfolioDetailContainer>)
}

export default Modal;