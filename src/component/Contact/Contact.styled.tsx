import styled from "styled-components";

export const SContactContainer = styled.div`
  margin: 1em;
`;

export const SContactHeader = styled.div`
  text-align: center;
  margin: 0 3em;
`;

export const STitle = styled.h1`
  font-family: ${props => props.theme.fontFamily};
  text-shadow: -0.033em 0 1px rgba(255, 0, 0, 0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67);
`;

export const SContactFormContainer = styled.div`
  background-color: ${props => props.theme.thirdColor};
  margin-top: 2rem;
  width: auto;
  height: auto;
  border-radius: 1rem;
`;

export const SInputsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const SForm = styled.form`
  padding: 2rem;
  width: 80%;
  margin: auto;
  text-align: center;
`;

export const SInputsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr 1fr);
  margin-right: 2rem;
`;

export const SInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SInput = styled.input`
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  width: auto;
  height: 2rem;
`;

export const STextareaContainer = styled.div``;

export const STextarea = styled.textarea`
  border-radius: 0.5rem;
  border: none;
  resize: none;
  width: 40rem;
`;

export const SButton = styled.button`
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 0.5rem;
  color: ${props => props.theme.secondaryColor};
  background-color: ${props => props.theme.fourthColor};
`;


