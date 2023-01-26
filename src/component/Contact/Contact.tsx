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
import {useAlert} from "react-alert";

const Contact = (): JSX.Element => {
    const intl = useIntl();
    const alert = useAlert();

    const {register, handleSubmit} = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
        alert.success("votre message a bien été envoyé !")
    }

    return (
        <SContactContainer>
            <SContactHeader>
                <STitle>Contact</STitle>
                <p>Une question ? Un projet ? Une envie d'échanger ? N'hésitez pas à me contacter ! </p>
            </SContactHeader>

            <SContactFormContainer>
                <SForm onSubmit={handleSubmit(onSubmit)}>
                    <SInputsWrapper>
                        <SInputsContainer>
                            <SInputWrapper>
                                <span>Nom :</span>
                                <SInput type="text" {...register("name", {required: true})}/>
                            </SInputWrapper>
                            <SInputWrapper>
                                <span>E-mail :</span>
                                <SInput type="email" {...register("email", {required: true})}/>
                            </SInputWrapper>
                        </SInputsContainer>

                        <STextareaContainer>
                            <SInputWrapper>
                                <span>Message :</span>
                                <STextarea required rows={7}  {...register("message")}/>
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