import React, {useState} from "react";
import {ModalProps, ModalProvider} from "styled-react-modal";
import {StyledComponent} from "styled-components";


interface IUseModalProps {
    defaultContent?: React.ReactNode;
    StyleModal: StyledComponent<React.ComponentClass<ModalProps, any>, any>;
}

interface IUseModal {
    modal: JSX.Element;
    showModal: boolean;
    openModal: () => void;
    closeModal: () => void;
    setModal: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

const useModal = (props: IUseModalProps): IUseModal => {
    const {defaultContent, StyleModal} = props;
    const [showModal, setShowModal] = useState(false);
    const [modal, setModal] = useState<React.ReactNode>(defaultContent)

    const openModal = (): void => {

        setShowModal(true);
    }

    const closeModal = (): void => {
        setShowModal(false);
    }

    return {
        modal: (
            <ModalProvider>
                <StyleModal isOpen={showModal} onBackgroundClick={closeModal}
                            onEscapeKeydown={closeModal}> {modal} </StyleModal>
            </ModalProvider>
        ),
        closeModal,
        openModal,
        showModal,
        setModal,

    }
}

export default useModal;