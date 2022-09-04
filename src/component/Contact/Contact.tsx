import React from 'react';
import {
    SContactFormContainer,
    STitle,
    SContactContainer,
    SContactHeader,
    SInput,
    SForm,
    SButton, STextarea, SInputWrapper, STextareaContainer, SInputsContainer, SInputsWrapper
} from "./Contact.styled";
import {useIntl} from "react-intl";
import {useForm} from "react-hook-form";
import sit_pose from "../../style/assets/img/img/sit.png"

const Contact = (): JSX.Element => {
    const intl = useIntl();

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = () => {
        console.log("OK")
    }

    return (
        <SContactContainer>
            <SContactHeader>
                <STitle>Contact</STitle>
                <p>Une question ? Un projet ? Une envie d'échanger ? N'hésitez pas à me contacter ! </p>
                <img src={sit_pose} alt="Jessica assise sur une chaise de bureaux avec 1 chat"
                     style={{width: "20rem"}}/>
            </SContactHeader>

            <SContactFormContainer>

                <SForm onSubmit={handleSubmit(onSubmit)}>
                    <SInputsWrapper>
                        <SInputsContainer>
                            <SInputWrapper>
                                <span>Nom :</span>
                                <SInput type="text" required/>
                            </SInputWrapper>
                            <SInputWrapper>
                                <span>E-mail :</span>
                                <SInput type="text" required/>
                            </SInputWrapper>
                        </SInputsContainer>

                        <STextareaContainer>
                            <SInputWrapper>
                                <span>Message :</span>
                                <STextarea required rows={6}/>
                            </SInputWrapper>
                        </STextareaContainer>
                    </SInputsWrapper>

                    <SButton type="submit">{intl.formatMessage({id: 'form_submit'})}</SButton>
                </SForm>
            </SContactFormContainer>
        </SContactContainer>
    )
}

export default Contact;